import React from "react";
import "./Qualifications.css";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoCodeWorkingSharp } from "react-icons/io5";

function Qualifications() {
  return (
    <div>
      <div className="upline">
          <div className="upline1"></div>
        </div>
      <div className="qulibox">
         
        <div className="heading">
          <h1>Qualification</h1>
          <p>My Education</p>
        </div>
        <div className="qulimainbox">
          <div className="leftbox">
            <div className="education">
              <h2>
                Education <MdOutlineCastForEducation />
              </h2>
              <div>
                <h3>Master in Web Developer</h3>
                <p>I have learn web development from 30days of coding </p>
              </div>
              <div>
                <h3> Computer Engineering IOT</h3>
                <p>
                  At present, I'm pursuing my B.tech in computer science IOT in
                  batch 2022 to 2026
                </p>
              </div>
            </div>
          </div>
          <div className="rightbox">
            <div className="work">
              <h2>
                Work <IoCodeWorkingSharp />
              </h2>
              <div>
                <h3>Frontend Developer Intern</h3>
                <p>
                  I have work for @Interpe as frontend developer in july 2024
                  batch
                </p>
              </div>
              <div>
                <h3>Frontend Developer Intern</h3>
                <p>
                  I have work for @codesoft as frontend developer in augest 2023
                  batch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
