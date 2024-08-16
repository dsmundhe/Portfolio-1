import React from "react";
import { motion } from "framer-motion";
import "./Midle.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Midle() {
  // Define scroll animation settings
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="mainbox">
        <motion.div
          className="topbox"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <div className="infobox">
            <h1>
              Hi, I’m <span>Dipak</span>, Frontend Developer
            </h1>
          </div>
        </motion.div>

        <div className="bottombox">
          <motion.div
            className="leftbox1"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <div className="bio">
              <h4>BIOGRAPHY</h4>
              Hi, I’m Dipak, a Frontend Developer, passionate about designing beautiful web interfaces.
            </div>
            <div className="contact">
              <h4>CONTACT</h4>
              <p>Dipak Mundhe, dipakmundhe2026@gmail.com Mo no: 8080255843</p>
            </div>
            <div className="services">
              <h4>SERVICES</h4>
              <p>Website Design, Frontend Development</p>
            </div>
          </motion.div>

          <motion.div
            className="midlebox btnhover"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <div className="profileimage">
              <img src="https://i.ibb.co/CMdxy9Y/profile.png" alt="profile" />
            </div>
          </motion.div>

          <motion.div
            className="rightbox1"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
          >
            <div className="bio">
              <h4>YEAR OF EXPERIENCE</h4>
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
          </motion.div>
        </div>

        <motion.div
          className="footericons"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          <div className="icons">
            <a href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/dsmundhe/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/ds.mundhe28/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Midle;
