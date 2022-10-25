import React from "react";
import "./Home.css";
import back from "../../Img/PicsArt_10-27-05.32.00.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import Projects from "../Projects/Projects";
const Home = () => {
  const c = useContext(Context)
  const {setScrolled} = c;
  // ? For animation
  const [animate, setanimate] = useState("about_hide");
  useEffect(() => {
    setTimeout(() => {
      setanimate("about");
    }, 1000);
  }, []);
  window.addEventListener("scroll", (e)=>{
    if(window.scrollY >= 20){
      setScrolled("main_navbar_container_scrolled")
    } else {
      setScrolled("main_navbar_container")
    }
  })
  return (
    <>
      <div className="main_home_container" id="Scroll">
        <div className="upper_container">
          <div className="my_image">
            <img src={back} alt="" />
          </div>
          <div className={animate}>
            <h1>About Me</h1>
            <hr />
            <br />
            <p>
              Name:- <strong>Anshal Patel</strong>
            </p>
            <p>
              Age:- <strong>19 years old</strong>
            </p>
            <p>
              Gender:- <strong>Male</strong>
            </p>
            <p>
              Current designation:- <strong>Varanasi, Uttar-pradesh, India</strong>
            </p>
            <br />
            <p>
              Introduction:-{" "}
              <strong>
                Greetings, I am Anshal and I am practicing Web development for
                more than 2 years, and have been working on MERN projects for
                more than a year. I am capable of building highly scalable,
                fully riched, and user-friendly web applications with MERN.
              </strong>
            </p>
            <br />
            <p>Experience:- <strong>Fresher</strong></p>
            <br />
            <p>Skills:- <strong>HTML, CSS, JavaScript, React.js, Express.js, Node.js, MongoDB, BootStrap</strong></p>
            <br />
            <p>Email:- <strong>anshalpatel6@gmail.com</strong></p>
            <br />
            <p><a href="https://github.com/anshal1?tab=repositories" rel="noreferrer" target="_blank"><i className="fa-brands fa-2x fa-github" id="git"></i></a></p>
            <h2 style={{textAlign: "center"}}>---- Thank You ----</h2>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Home;
