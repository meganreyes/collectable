import React from "react";
import AddItem from "./Components/AddItem";
import ItemList from "./Components/ItemList";
import AddImage from "./Components/AddImage";
import TopBar from "./Components/TopBar";
import HomePage from "./Components/HomePage";
import CollectionPage from "./Components/CollectionPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Sky from "react-sky";
import star from "./Images/star.svg";
import asterik from "./Images/asterik.svg";
import squig from "./Images/squig.svg";
import hashtag from "./Images/hashtag.svg";
import smile from "./Images/smile.svg";

const styles = {
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  orange: (opacity = 1) => `rgb(250, 100, 0, ${opacity})`,
  topBarHeight: 40,
};
// let currentUrl = AddImage.state.url;
function App() {
  return (
    <div className="App">
      <Router>
        <TopBar styles={styles} />
        <Route path="/" exact component={HomePage} />
        <Route path="/collections" exact component={CollectionPage} />
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: star,
            1: asterik,
            2: squig,
            3: hashtag,
            4: smile,
            /* 3: your other image... */
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={
            40
          } /* Pass the number of images Sky will render chosing randomly */
          time={100} /* time of animation */
          size={"50px"} /* size of the rendered images */
        />
      </Router>
    </div>
  );
}
export default App;
