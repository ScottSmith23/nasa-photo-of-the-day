import React from "react";
import "./App.css";
import MainComp from "./components/mainComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
const SpaceHeader = styled.h2`
font-family: 'Titillium Web', sans-serif;
color:gainsboro;
`
const Logo = styled.img`
width:100px

`;
const HeaderDiv = styled.div`
display:flex;
margin-top:20px;
margin-left:10%;
color:gainsboro;
`
const Headercom = styled.h1`
font-family: 'Titillium Web', sans-serif;
margin-top:20px;

`
function App() {
  return (
    <div className="App">
      <HeaderDiv>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt="Nasa Logo" />
      <Headercom>NASA</Headercom>
      </HeaderDiv>
      <SpaceHeader>Astronomy Picture of the Day</SpaceHeader>
    <MainComp />
    </div>
  );
}

export default App;
