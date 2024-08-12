import React, { useState } from "react";
import Navbar from "./Navbar";
import Midle from "./Midle";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Projects from "./Projects";
import Contact from "./Contact";
 import Footer from "./Footer";

import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import { useRef } from "react";

function Layout() {
  const [inval, setinval] = useState("list");
  const [btn, setbtn] = useState(<GiHamburgerMenu />);
  const showhide = () => {
    if (inval === "list") {
      setinval("list1");
      setbtn(<RxCross1 />);
    } else {
      setinval("list");
      setbtn(<GiHamburgerMenu />);
    }
  };

  const skills = useRef(null);
  const education = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <div>
            {" "}
            <h1 className="logoheading">DM</h1>
          </div>
          <div className="btn">
            <button onClick={showhide}>{btn}</button>
          </div>
        </div>
        <div className={inval}>
          <ul>
            <li>Home</li>
            <li onClick={() => scrollToSection(skills)}>Skills</li>
            <li onClick={() => scrollToSection(education)}>Qualifications</li>
            <li onClick={() => scrollToSection(projects)}>Projects</li>
            <li onClick={()=>scrollToSection(contact)}>Contact me</li>
          </ul>
        </div>
      </div>
      <div>
        <Midle />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={education}>
        <Qualifications />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={contact}>
        <Contact/>
      </div>
 <div>
  <Footer/>
 </div>
    </div>
  );
}

export default Layout;
