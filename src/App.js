import React from "react";
import AddItem from "./Components/AddItem";
import ItemList from "./Components/ItemList";
import AddImage from "./Components/AddImage";

import "./App.css";

let currentUrl = AddImage.state.url;
function App() {
  return (
    <div className="App">
      <h2>Collectable</h2>
      <AddImage/>
      {/* <AddCategory /> */}
      <AddItem />
      <h3>My Collection: </h3>
      <ItemList />
    </div>
  );
}
export default App;
