// import React Components
import React from "react";
import logo from "./images/logo.png";

// creates a Header component to render
const Header = (props) => {
  return (
    <header className="App-header">
      <img
        src={logo}
        className="App-logo hvr-bounce-in"
        alt="logo"
        title="show/hide instructions"
      />
      <h1 className="App-title">Dog Clicky Memory Game</h1>
      <p className="App-score">Score: {props.score}</p>
      <p className="ApIp-intro">
        Click any dog image to gain one point towards your score.
        <br />
        But don't click the same image twice!
      </p>
    </header>
  );
};

// exports Header 
export default Header;
