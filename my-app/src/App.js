import "./App.css";
import WebsiteProject from "./WebsiteProject.png";
import VanillaJavaScriptWeatherApp from "./VanillaJavaScriptWeatherApp.png";
import ReactWeatherApp from "./ReactWeatherApp.png";
import ReactDictionaryApp from "./ReactDictionaryApp.png";

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
                className="img-fluid"
                alt="Website Project"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Basic Website Project</h2>
                <p className="mb-5 text-muted">
                  A basic webpage about my favourite K-pop group 'ITZY', using
                  basic html, css and javascript.
                </p>
                <a
                  href="https://www.shecodes.io/workshops/shecodes-basics-60f13649-dc6d-4b55-9766-fecefc98bb8b/projects/407994"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to website
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">Weather App</h2>
                <p className="mb-5">
                  Using more advanced html, css and javascript, also
                  incorporated tools such as bootstrap, API integration and
                  hosted on Netlify. Code is open-sourced on Github.
                </p>
                <a
                  href="https://hardcore-noyce-7321bf.netlify.app/"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Weather App
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={VanillaJavaScriptWeatherApp}
                className="img-fluid"
                alt="Weather App"
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-lg-block">
              <img
                src={ReactWeatherApp}
                className="img-fluid"
                alt="React Weather App"
              />
            </div>
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">React Weather App</h2>
                <p className="mb-5">
                  Weather App using React, Bootstrap, API integration and hosted
                  on Netlify. Code is open-sourced on Github.
                </p>
                <a
                  href="https://dapper-begonia-95cb66.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Weather App
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-description">
                <h2 className="mb-5">React Dictionary App</h2>
                <p className="mb-5">
                  Dictionary App using React, Bootstrap, API integration and
                  hosted on Netlify. Code is open-sourced on Github.
                </p>
                <a
                  href="https://compassionate-fermat-332b54.netlify.app"
                  className="btn-branding-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Dictionary App
                </a>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={ReactDictionaryApp}
                className="img-fluid"
                alt="React Dictionary App"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
