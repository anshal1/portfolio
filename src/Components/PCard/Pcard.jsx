import React from "react";
import "./Pcard.css";
const Pcard = (props) => {
  return (
    <div className="main_project_card">
      <div className="project_image">
        <img src={props.img} alt="" />
        </div>
      <div className="project_info">
        <h3>Website name:- {props.name}</h3>
        <br />
        <p>Features:- {props.feature}</p>
        <br />
        <p>Software used:-{props.toolsUsed}</p>
        <br />
        <a href={props.link}rel="noreferrer" target="_blank">{props.link} <span><i className="fa-solid fa-link"></i></span> </a>
      </div>
    </div>
  );
};

export default Pcard;
