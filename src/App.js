import React from "react";
import AddItem from "./Components/AddItem";
import AddCategory from "./Components/AddCategory";
import ItemList from "./Components/ItemList";
import AddImage from "./Components/AddImage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>Collectable</h2>
      {/* <AddCategory /> */}
      <AddItem />
      <h3>My Collection: </h3>
      <ItemList />
      <h4>
      <AddImage />
      </h4>
    </div>
  );
}
export default App;
