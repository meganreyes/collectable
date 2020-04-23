import React, { useState } from "react";
import styled from "styled-components";
import firebase from "./firebase";
const AddItemDiv = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin: 30px auto;
  padding: 5px;
`;
const InputName = styled.input`
  padding: 0.5em;
  border: none;
  background: #f4f4;
  margin-bottom: 10px;
  border-radius: 3px;
`;
const InputDescription = styled.textarea`
  padding: 0.5em;
  border: none;
  height: 80px;
  background: #f4f4;
  margin-bottom: 10px;
  border-radius: 3px;
`;
const Button = styled.div`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
`;

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const addItem = () => {
    firebase.firestore().collection("items").add({
      name,
      description,
    });
    setName("");
    setDescription("");
  };
  return (
    <AddItemDiv>
      <InputName
        value={name}
        placeholder="Item Name"
        onChange={(e) => setName(e.target.value)}
      />
      <InputDescription
        placeholder="Item Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={addItem}>Add Item</Button>
    </AddItemDiv>
  );
};
export default AddItem;
