import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import "../CSS/ItemList.css";
const ListsDiv = styled.div`
  width: 60%;
  height: auto;
  padding: 20px;
  position: relative;
  margin-left: 230px;
  margin-right: 50px;
`;
const ListItemDiv = styled.div`
  background: #b2c4db;
  border-radius: 5px;
  width: 150%;
  position: relative;
`;
const ListTitleDiv = styled.div`
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin: 3px;
`;

const ListItemDetailDiv = styled.p`
  font-size: 18px;
  color: black;
  margin: 3px;

  overflow: auto;
`;
const ListItemDeleteButton = styled.button`
  border-radius: 5px;
  background: #c26c61;
  color: white;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 5px;
  right: 10px;
  outline: none;
`;

const contentStyle = {
  marginTop: "40px",
};
function useLists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("items")
      .onSnapshot((snapshot) => {
        const lists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLists(lists);
      });
  }, []);
  return lists;
}
const ItemList = () => {
  const lists = useLists();
  const handleOnDelete = (id) => {
    firebase.firestore().collection("items").doc(id).delete();
  };
  return (
    <ListsDiv style={contentStyle}>
      {lists.map((list) => {
        return (
          <ListItemDiv id="ListItem">
            <ListItemDetailDiv id="CollectionName">
              {list.collection}
            </ListItemDetailDiv>
            <ListTitleDiv id="ListItemHeaderGroup">{list.name} </ListTitleDiv>
            <ListItemDetailDiv>
              <img
                id="ListImage"
                src={list.image}
                style={{
                  margin: "3px",
                  width: "50%",
                  height: "auto",
                }}
              />
            </ListItemDetailDiv>
            <ListItemDetailDiv id="about">{list.description}</ListItemDetailDiv>

            <ListItemDeleteButton onClick={() => handleOnDelete(list.id)} />
          </ListItemDiv>
        );
      })}
    </ListsDiv>
  );
};
export default ItemList;
