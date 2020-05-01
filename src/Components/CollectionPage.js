import React, { useState } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import {SortCategory} from "./SortCategory";
import { Spring, config } from "react-spring/renderprops";



const CollectionPage = () => {
  const[sorted, setSorted] = useState("")
  return (

    <Spring config={config.molasses} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div class="wrapper" style={{ display: "inline-block" }}>
            <div class="addItem" style={{ float: "left", position: "fixed" }}>
              <AddItem />
              <SortCategory sorted={sorted} setSorted={setSorted} />
            </div>
            <div class="list" style={{ float: "right", position: "relative" }}>
              <ItemList sorted={sorted} />
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default CollectionPage;
