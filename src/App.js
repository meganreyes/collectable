import React from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>Collectable</h2>
      <AddItem />
      <h3>Items : </h3>
      <ItemList />
    </div>
  );
}
export default App;
