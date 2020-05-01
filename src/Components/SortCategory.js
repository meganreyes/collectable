import React, { useState } from "react";
import styled from "styled-components";
import firebase from "../firebase";
import AddImage from "./AddImage";

import "../CSS/AddItem.css";
const AddItemDiv = styled.div`
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
const InputImage = styled.input`
  padding: 0.5em;
  border: none;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const InputCollection = styled.input`
  padding: 0.5em;
  border: none;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const InputDescription = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0px;
  padding-left: 10px;
  padding-right: 2.5px;
  margin-left: 0px;
  /* width: 95%; */
  max-width: 95%;
  min-width: 95%;
  visibility: visible !important;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  resize: none;
  background: transparent;
  outline: none;
  color: #565c73;
  font-family: "Varela", sans-serif;
  font-size: 0.875em;
  border: solid 1px #a0acbd;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
`;

var sortWord = "";

const contentStyle = {
  marginTop: "0px",
};
const Button = styled.div``;

export const SortCategory = ({sorted, setSorted}) => {
  return (
    <form id="addItemForm" style={contentStyle}>
      <h1 id="headerGroup">Sort Collections:</h1>
      <AddItemDiv>
        <InputName
          id="nameInput"
          value={sorted}
          placeholder="Collection Name"
          autoComplete="off"
          onChange={(e) => setSorted(e.target.value)}  
       />
      </AddItemDiv>    
    </form>
    
  );
};

