import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import "../CSS/AddCategory.css";
const AddCategoryDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 30px auto;
  padding: 5px;
`;
const InputName = styled.input`
  padding: 0.5em;
  border: none;
  margin-bottom: 10px;
  border-radius: 3px;
`;
const Button = styled.div``;

const AddCategory = () => {
  const [name, setName] = useState("");
  const addCategory = () => {
    firebase.firestore().collection("collections").add({
      name,
    });
    setName("");
  };
  return (
    <form id="addItemForm">
      <h1 id="headerGroup">New Category!</h1>
      <AddCategoryDiv>
        <InputName
          id="nameInput"
          value={name}
          placeholder="Category Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button id="submitButton" onClick={addCategory}>
          Add A New Collection!
        </Button>
      </AddCategoryDiv>
    </form>
  );
};
export default AddCategory;
