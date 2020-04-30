import React from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import { Spring, config } from "react-spring/renderprops";

const CollectionPage = () => {
  return (
    <Spring config={config.molasses} from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div class="wrapper" style={{ display: "inline-block" }}>
            <div class="addItem" style={{ float: "left", position: "fixed" }}>
              <AddItem />
            </div>
            <div class="list" style={{ float: "right", position: "relative" }}>
              <ItemList />
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default CollectionPage;
