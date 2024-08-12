import React from "react";
import "./Footer.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Me</h2>
        <p>
          I am a passionate Front-end Developer skilled in creating stunning and
          functional web applications. Feel free to reach out to me through the
          links below or connect on social media.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/dsmundhe"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ds.mundhe28/"
            target="_blank"
            rel="noopener noreferrer"
          >
         <IoLogoInstagram />
          </a>
        </div>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> dipakmundhe2026@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (+91) 8080255843
          </p>
        </div>

        <p className="footer-bottom">
          © 2024 Dipak Mundhe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
