import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <div className="project--title">{props.title}</div>
      <div className="project--info">
        <img className="project--pic" src={props.image} alt="project-pic" />
        <div className="project--details">
          <div className="project--links">
            <a href={props.link} target="_blank" rel="noreferrer">
              Live Link
            </a>
            <a href={props.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          </div>
          <div className="project-summary">{props.summary}</div>
          <p className="project--technology">{props.technology}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
