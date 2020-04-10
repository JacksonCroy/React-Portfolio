import React from "react";
import "./style.css";

function GitRepos() {
    return (
      <div className="textColor">
          
          <div className="container portfoliobox">
        <div className="row justify-content-center">
            <div className="col">
                <h1>Portfolio</h1>
                <hr className="rounded col-md-8" />
                <img id="pokePic" src="/imgs/pokemans.PNG" alt="pokemon battle generator" />
                <img id="pokePic" src="/imgs/pokemans2.PNG" alt="pokemon battle generator" />
                <ul>
                    <li>
                        <a className="btn btn-dark"href="https://glacial-beyond-53964.herokuapp.com/">
                PokeMon Battle Generator</a>
            </li>
            <li>
              <a className="btn btn-primary" href="https://github.com/JacksonCroy/Dope-Pokemon-Dopeness">
                Github Repository</a>
            </li>
            <li>
              This application generates two Pokemon to battle. This application
              uses HTML, CSS, Jquery, and Express Handlebars on the front end
              and uses Node.js, Express, MySQL, and Sequelize on the back end to
              accomplish this. This site is hosted using Heroku, which you can
              find linked below.
            </li>
          </ul>
        </div>
      </div>
        <div className="row justify-content-center">
            <div className="col">
                <hr className="rounded col-md-8" />
                <img id="pokePic" src="/imgs/notesss.PNG" alt="note taker" />
                <img id="pokePic" src="/imgs/note2.PNG" alt="note taker" />
                <ul>
                    <li>
                        <a className="btn btn-dark" href=" https://jacksoncroy.github.io/Note-Taker/">
                Note Taker</a>
            </li>
            <li>
              <a className="btn btn-primary" href="https://github.com/JacksonCroy/Note-Taker">
                Github Repository</a>
            </li>
            <li>
                The note taker uses html routes to display the HTML, then uses Javascrip ajax Calls alongside serverside api routes to Save and delete notes the user creates.
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <hr className="rounded col-md-8" />
          <img
            id="findtunepic"
            src="/imgs/find tune.PNG"
            alt="find Tune"
          />
          <img
            id="findtunepic"
            src="/imgs/find tune 2.PNG"
            alt="find Tune"
          />
          <ul>
            <li>
              <a className="btn btn-dark" href="https://justinkellogg89.github.io/find-tune/">
                Find Tune</a>
            </li>
            <li>
              <a className="btn btn-primary" href="https://github.com/justinkellogg89/find-tune">
                Github Repository</a>
            </li>
            <li>
              The Find Tune Project is a Music suggestion website that at the
              input of an artist generates top ten songs, and a related GIF
              using Deezer API, and GIPHY API
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="rounded col-md-8" />
          <img id="findtunepic" src="/imgs/WDB.PNG" alt="find Tune" />
          <img id="wdb" src="/imgs/5DWDB.PNG" alt="find Tune" />
          <ul>
            <li>
              <a className="btn btn-dark" href="https://jacksoncroy.github.io/weather-tracker/">
                Weather Dashboard</a>
            </li>
            <li>
              <a className="btn btn-primary" href="https://github.com/JacksonCroy/weather-tracker">
                Github Repository</a>
            </li>
            <li>
              The Weather Dashboard uses 3 sperate open weather APIs to get
              current weather in searched city, the five day forcast, and the UV
              index.
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="rounded col-md-8" />
          <img id="findtunepic" src="/imgs/PWG.PNG" alt="find Tune" />
          <img id="wdb" src="/imgs/PWG2.PNG" alt="find Tune" />
          <ul>
            <li>
              <a className="btn btn-dark" href="https://jacksoncroy.github.io/PasswordGenerator/">
                Password Generator</a>
            </li>
            <li>
              <a className="btn btn-primary" href="https://github.com/JacksonCroy/PasswordGenerator">
                Github Repository</a>
            </li>
            <li>
              The password generator generates a password after the user answers
              a couple of questions about the contents and length of the
              designated password
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr className="rounded col-md-8" />
          <img className="" id="findtunepic" src="/imgs/WDS.PNG" alt="find Tune" />
          
          <ul>
            <li>
              <a className="btn btn-dark" href="https://jacksoncroy.github.io/Note-Taker/">
                Workday scheduler</a>
            </li>
            <li>
              <a className="btn btn-primary" href="https://github.com/JacksonCroy/workday-schedule">
                Github Repository</a>
            </li>
            <li>
              Using Moment Js and local storage the workday scheduler has 9 text
              boxes that each hold the value of the hour and the user can save
              what they plan to do for the day by hour in the text areas
            </li>
          </ul>
        </div>
      </div>
    </div>
        
      </div>
    );
  }
  
  export default GitRepos;
  