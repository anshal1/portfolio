import React from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import {useNavigate} from "react-router-dom"
import "./Navbar.css";
const Navbar = () => {
  const c = useContext(Context);
  const {  Scrolled } = c;
  const navi = useNavigate()
  return (
    <>
      <div className={Scrolled}>
        <div className="web_site_name">
          <h2>Portfolio</h2>
        </div>
        <div className="website_links">
          <p className="links" onClick={()=>{
            navi("/");
          }}>Home</p>
          <p className="links" onClick={()=>{
            navi("/resume")
          }}>Resume</p>
          {/* <button
            className="contact_btn"
            onMouseEnter={() => {
              setHover("display");
            }}
            onMouseLeave={() => {
              setHover("hide");
            }}
          >
            Contact {<Tooltip text="Contact Me" />}{" "}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
