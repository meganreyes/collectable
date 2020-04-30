import React, { Component } from "react";
import { storage } from "../firebase";
import placeholder from "../Images/placeholder.svg";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };
  render() {
    const style = {
      display: "center",
      verticalalign: "middle",
      alignItems: "center",
      justifyContent: "center",
    };
    const inputStyle = {
      maxWidth: "100%",
    };
    const uploadStyle = {};
    return (
      <div id="addImageHeader" style={style}>
        Add an image:
        <br />
        <div class="wrapper">
          <input
            id="file"
            style={inputStyle}
            type="file"
            onChange={this.handleChange}
          />
          <br />
          <button id="upload" style={uploadStyle} onClick={this.handleUpload}>
            Click To Upload
          </button>
        </div>
        <br />
        <progress id="progress" value={this.state.progress} max="100" />
        <br />
        <img
          id="image"
          src={this.state.url || placeholder}
          alt="Uploaded images"
          width="30%"
          height="auto"
        />
      </div>
    );
  }
}

export default ImageUpload;
