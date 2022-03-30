import React from 'react';
import weatherApp from '../images/weather-app.png';

function Project(props) {
  return (
    <div className="project">
      <div className="project--title">Weather App</div>
      <div className="project--info">
        <img className="project--pic" src={weatherApp} alt="weather-app" />
        <div className="project--details">
          <div className="project--links">
            <p>Live Link</p>
            <p>Repo</p>
          </div>
        </div>
        <div className="project-summary">
          This project is a weather app that uses openweather api to retrieve
          the weather from any city or country in the world.
        </div>
        <div className="project-technology">JavaScript, HTML, CSS, Jest</div>
      </div>
    </div>
  );
}

export default Project;
