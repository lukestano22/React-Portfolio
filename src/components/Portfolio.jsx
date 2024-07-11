import React from "react";

//function
export default function Portfolio() {
    const weatherRedirect = () => {
        window.location.href = 'https://github.com/lukestano22/Weather-App'
        return
    }
    const calcRedirect = () => {
        window.location.href = 'https://github.com/lukestano22/Calculator'
        return
    }
    const notesRedirect = () => {
        window.location.href = 'https://github.com/lukestano22/Express-notes'
        return
    }
    const dexRedirect= () => {
        window.location.href = 'https://github.com/Paul449/DexPlorer'
        return
    }
    return (
      <div className="projects-container">
        <div id="port-title">Portfolio</div>
        <div className="projects">
            <div className="project" onClick={weatherRedirect}>
                <img
                src="../assets/weatherimg.png"
                alt="Weather App"
                className="project-image"
                />
                <p>Weather App</p>
            </div>
            <div className="project" onClick={calcRedirect}>
                <img
                    src="../assets/calculatorimg.png"
                    alt="Calculator"
                    className="project-image"
                />
                <p>Calculator</p>
            </div>
            <div className="project" onClick={dexRedirect}>
                <img
                src="../assets/DexplorerImg.png"
                alt="DexPlorer"
                className="project-image"
                />
                <p>DexPlorer</p>
            </div>
            <div className="project" onClick={notesRedirect}>
                <img
                src="../assets/notesImg.png"
                alt="Notes App"
                className="project-image"
                />
                <p>Notes App</p>
            </div>
        </div>
      </div>
    );
  }

