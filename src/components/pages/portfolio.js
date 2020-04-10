import React from "react";
import Jumbotron from "../Jumbotron";
import Cards from "../AboutMeCards/profilecard";
import "./style.css";
// import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Jumbotron>
            <h1 id="nameTitle">Jackson Croy Fullstack Web Developer</h1>
          </Jumbotron>
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
