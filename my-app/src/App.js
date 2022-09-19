import React from "react";
import "./App.css";
import WebsiteProject from "./WebsiteProject.png";
import EarlyPortfolioPage from "./EarlyPortfolioPage.PNG";
import VanillaJavaScriptWeatherApp from ".//VanillaJavaScriptWeatherApp.png";
import ReactWeatherApp from "./ReactWeatherApp.png";
import ReactDictionaryApp from "./ReactDictionaryApp.png";
import ReactCalculatorApp from "./ReactCalculator.PNG";
import VanillaJSCalculatorApp from "./VanillaJSCalculatorAppYellow.PNG";
import VanillaJSClock from "./VanillaJSClockPink.PNG";
import VanillaJSQuizGame from "./VanillaJSQuizApp.PNG";
import vanillaJSAdventure from "./vanillaJSAdventureGame.PNG";
import vanillaJSTicTacToe from "./vanillaJSTicTacToe.PNG";
import vanillaJSSnakeGame from "./vanillaJSSnakeGame.PNG";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h3>Hi, I'm</h3>
        <h1>Ellie Kubo</h1>
        <h2 className="mb-3">Front End Developer based in Australia</h2>
        <a href="mailto:eck930705@gmail.com" className="btn btn-branding">
          Contact me
        </a>
      </div>
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={WebsiteProject}
                className="img-fluid mt-5"
                alt="Website Project"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Basic Website Project</h2>
                <p className="mb-5 text-muted">
                  A basic webpage about my favourite K-pop group 'ITZY', using
                  basic HTML, CSS and JavaScript.
                </p>
                <a
                  href="https://www.shecodes.io/workshops/shecodes-basics-60f13649-dc6d-4b55-9766-fecefc98bb8b/projects/407994"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to website
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Responsive Portfolio Project</h2>
                <p className="mb-5 text-muted">
                  An earlier portfolio project using HTML, CSS, Javascript and
                  Responsive Design.
                </p>
                <a
                  href="https://sad-bardeen-5faffc.netlify.app/"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to website
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={EarlyPortfolioPage}
                className="img-fluid mt-5"
                alt="Earlier version of portfolio"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={VanillaJavaScriptWeatherApp}
                className="img-fluid mt-5"
                alt="Weather App"
              />
            </div>

            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Weather App</h2>
                <p className="mb-5 text-muted">
                  Using more advanced HTML, CSS and JavaScript, also
                  incorporated tools such as bootstrap, API integration and
                  hosted on Netlify. Code is open-sourced on Github.
                </p>
                <a
                  href="https://hardcore-noyce-7321bf.netlify.app/"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Weather App
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">React Weather App</h2>
                <p className="mb-5 text-muted">
                  Weather App using React, Bootstrap, API integration and hosted
                  on Netlify. Code is open-sourced on Github.
                </p>
                <a
                  href="https://dapper-begonia-95cb66.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Weather App
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={ReactWeatherApp}
                className="img-fluid"
                alt="React Weather App"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={ReactDictionaryApp}
                className="img-fluid"
                alt="React Dictionary App"
              />
            </div>

            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">React Dictionary App</h2>
                <p className="mb-5 text-muted">
                  Dictionary App using React, Bootstrap, API integration and
                  hosted on Netlify. Code is open-sourced on Github.
                </p>
                <a
                  href="https://compassionate-fermat-332b54.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Dictionary App
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">React Calculator App</h2>
                <p className="mb-5 text-muted">
                  Calculator App using React, hosted on Netlify. Code is
                  open-sourced on Github.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=DgRrrOt0Vr8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://bright-sundae-5d4a02.netlify.app/"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open React Calculator App
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={ReactCalculatorApp}
                className="img-fluid"
                alt="React Calculator App"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={VanillaJSCalculatorApp}
                className="img-fluid mt-5"
                alt="Vanilla JavaScript Calculator App"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Vanilla JavaScript Calculator App</h2>
                <p className="mb-5 text-muted">
                  Calculator App using HTML, CSS and vanilla JavaScript hosted
                  on Netlify. Code is open-sourced on Github.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=j59qQ7YWLxw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://delightful-bombolone-18f490.netlify.app/"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Calculator App
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Vanilla JavaScript Clock</h2>
                <p className="mb-5 text-muted">
                  Clock App using HTML, CSS and vanilla JavaScript hosted on
                  Netlify. Code is open-sourced on Github.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=Ki0XXrlKlHY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://unrivaled-naiad-86cddf.netlify.app/"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Clock
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={VanillaJSClock}
                className="img-fluid mt-5"
                alt="Vanilla JavaScript Clock"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={VanillaJSQuizGame}
                className="img-fluid mt-5"
                alt="Vanilla JavaScript Quiz App"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Vanilla JavaScript Quiz App</h2>
                <p className="mb-5 text-muted">
                  Quiz App using HTML, CSS and vanilla JavaScript hosted on
                  Netlify. Code is open-sourced on Github.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=riDzcEQbX6k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://sparkly-starship-a54621.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Quiz App
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Vanilla JavaScript Text Adventure Game</h2>
                <p className="mb-5 text-muted">
                  Quiz App using HTML, CSS and vanilla JavaScript.
                  <a
                    href="https://youtube.com/watch?v=R1S_NhKkvGA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://bucolic-gingersnap-765ab2.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go on a Text Adventure
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={vanillaJSAdventure}
                className="img-fluid mt-5"
                alt="Vanilla JavaScript Text Adventure Game"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={vanillaJSTicTacToe}
                className="img-fluid mt-5"
                alt="Vanilla JavaScript Tic Tac Toe"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Vanilla JavaScript Tic Tac Toe</h2>
                <p className="mb-5 text-muted">
                  Quiz App using HTML, CSS and vanilla JavaScript.
                  <a
                    href="https://www.youtube.com/watch?v=Y-GkMjUZsmM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://delightful-brigadeiros-4d60c9.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Tic Tac Toe
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Vanilla JavaScript Snake Game</h2>
                <p className="mb-5 text-muted">
                  Quiz App using HTML, CSS and vanilla JavaScript.
                  <a
                    href="https://www.youtube.com/watch?v=QTcIXok9wNY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    See video I referenced here
                  </a>
                </p>
                <a
                  href="https://melodious-arithmetic-82d978.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Snake Game
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={vanillaJSSnakeGame}
                className="img-fluid mt-5"
                alt="Vanilla JavaScript Snake Game"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        All projects above are{" "}
        <a
          href="https://github.com/Ellie575?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github
        </a>
      </div>
    </div>
  );
}

export default App;
