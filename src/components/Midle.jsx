import React from "react";
 
import "./Midle.css";
import Navbar from "./Navbar";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Midle() {
 
  return (
    <div>
      <div className="mainbox">
        <div className="topbox">
          <div className="infobox">
            <h1>
              Hi , I'am <span>Dipak</span> Frontend Developer
            </h1>
          </div>
        </div>
        <div className="bottombox">
          <div className="leftbox">
            <div className="bio">
              <h4>BIOGRAPHY</h4>
              Hi, I'am Dipak,Frontent Developer, Passionate about desiginig
              beautiful web interfaces,
            </div>
            <div className="contact">
              <h4>CONTACT</h4>
              <p>Dipak Mundhe, dipakmundhe2026@gmail.com Mo no: 8080255843</p>
            </div>

            <div className="services">
              <h4>SERVICES</h4>
              <p>Website Design, Frontend Development</p>
            </div>
          </div>
          <div className="midlebox">
            <div className="profileimage">
              <img src="https://i.ibb.co/CMdxy9Y/profile.png" alt="profile" />
            </div>
          </div>
          <div className="rightbox">
            <div className="bio">
              <h4>YEAR OF EXPERINCE</h4>
              Fresher
            </div>
            <div className="contact">
              <h4>COMPLETED PROJECTS</h4>
              <h1>20+</h1>
            </div>

            <div className="services">
               <div>
               <h4>WORK AS</h4>
               <p>Intern @Internpe</p>
               </div>
               <div>
               <h4>WORK AS</h4>
               <p>Intern @CodeSoft</p>
               </div>
            </div>
          </div>
        </div>
        <div className="footericons">
          <div className="icons">
            <a href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/" target="_blank"> <FaLinkedin /></a>
            <a href="https://github.com/dsmundhe/" target="_blank"> <FaGithub /></a>
            <a href="https://www.instagram.com/ds.mundhe28/" target="_blank"> <IoLogoInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Midle;
