import React from "react";
import "./style.css";

function Cards() {
  return (
    <div>
        <div className="row">
            <div className="card picCard justify-content-center">
        <img
          className="card-img-top picture "
          src="https://avatars1.githubusercontent.com/u/60199515?s=460&u=439c790f6b900949f9bc6cac3ca29047638891f8&v=4"
          alt=""
        />
        <div className="card-body">
          <p className="card-text">
            Aspiring Developer, Currently attending the U of A fullstack coding
            bootcamp.
          </p>
        </div>
      </div>

    <div className="col">
        <div  id="bio">
         <h5>I have lived in Mesa, Az since 2010. Currently I am a server at a bar and grill, and was attending MCC when I decided to make the switch to the U of A Coding Bootcamp.The Technologies I have been working with in the bootcamp have been HTML, CSS, JavaScript, Node.js, SQL databases, No SQL databases, and React</h5> 
      </div>
    </div>
      
            

      <div className="card picCard2 justify-content-center container">
        <img
          className="card-img-top picture2 "
          src="https://www.clipartkey.com/mpngs/m/74-740806_programming-languages-logo-png-coding-language-icon.png"
          alt=""
        />
      </div>
        </div>
      
    </div>
  );
}

export default Cards;
