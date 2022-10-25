import React from 'react';
import Pcard from '../PCard/Pcard';
import "./Project.css";
import P1 from "../../Img/shareimage.png";
import P2 from "../../Img/moodychat.png";
import P3 from "../../Img/anime.png";
const Projects = () => {
  return (
    <>
    <div className="main_projects_container">
        <div className="heading">
            <h1>Projects</h1>
        </div>
        <br />
        <br />
        <div className="project_box">
            <Pcard img={P1} name="Share my image" feature="Uploading an image, like an image, save an image" toolsUsed="React.js, Express.js, MongoDB, Multer, Cloudinary, Node.js, bcrypt, jwtToken " link="https://shareimage-three.vercel.app"/>
            <br />
            <Pcard img={P2} name="Moody-chat" feature="Create Room and Chat with friends in real time, Private rooms, Kick users" toolsUsed="React.js, Express.js, MongoDB, Socket.io, Node.js, bcrypt, jwtToken" link="https://moodychat.vercel.app"/>
            <br />
            <Pcard img={P3} name="Mr.anime" feature="Search anime, get specific anime meta-data, watch anime, search by geners" toolsUsed="React.js, Rapid.api" link="https://mr-anime-anshal1.vercel.app"/>
        </div>
    </div>
    </>
  )
}

export default Projects
