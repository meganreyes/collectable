import React from "react";
import AddItem from "./Components/AddItem";
import ItemList from "./Components/ItemList";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h2>Collectable</h2>
      <AddItem />
      <h3>My Collection: </h3>
      <ItemList />
    </div>
  );
}
export default App;
