import React from "react";
import "./App.css";
import MainComp from "./components/mainComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
const SpaceHeader = styled.h2`
font-family: 'Titillium Web', sans-serif;

`

function App() {
  return (
    <div className="App">
      <img src="./img/nasaLogo.png" alt="Nasa Logo" />
      <h1>NASA</h1>
      <SpaceHeader>Astronomy Picture of the Day</SpaceHeader>
    <MainComp />
    </div>
  );
}

export default App;
