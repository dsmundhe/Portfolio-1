import React, { useState, useRef } from "react";
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

function Layout() {
  const [inval, setinval] = useState("list"); // State to toggle between 'list' and 'list1'
  const [btn, setbtn] = useState(<GiHamburgerMenu />); // State for button icon

  const showhide = () => {
    if (inval === "list") {
      setinval("list1"); // Show the menu by changing class
      setbtn(<RxCross1 />); // Change to close (cross) icon
    } else {
      setinval("list"); // Hide the menu by changing class
      setbtn(<GiHamburgerMenu />); // Change to hamburger menu icon
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
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <h1 className="logoheading">DM</h1>

          <label class="hamburger">
            <input type="checkbox" onClick={showhide}/>
            <svg viewBox="0 0 32 32">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <div className={inval}>
          <ul>
            <li>Home</li>
            <li onClick={() => scrollToSection(skills)}>Skills</li>
            <li onClick={() => scrollToSection(education)}>Qualifications</li>
            <li onClick={() => scrollToSection(projects)}>Projects</li>
            <li onClick={() => scrollToSection(contact)}>Contact me</li>
          </ul>
        </div>
      </div>

      {/* Middle section */}
      <div>
        <Midle />
      </div>

      {/* Skills Section */}
      <div ref={skills}>
        <Skills />
      </div>

      {/* Qualifications Section */}
      <div ref={education}>
        <Qualifications />
      </div>

      {/* Projects Section */}
      <div ref={projects}>
        <Projects />
      </div>

      {/* Contact Section */}
      <div ref={contact}>
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
