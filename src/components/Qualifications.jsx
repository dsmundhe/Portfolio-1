import React from "react";
import { motion } from "framer-motion";
import "./Qualifications.css";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoCodeWorkingSharp } from "react-icons/io5";

// Define animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Qualifications = () => {
  return (
    <div>
      <div className="upline">
        <div className="upline1"></div>
      </div>
      <motion.div
        className="qulibox"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="heading">
          <h1>Qualification</h1>
          <p>My Education</p>
        </div>
        <div className="qulimainbox">
          <motion.div
            className="leftbox"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="education">
              <h2>
                Education <MdOutlineCastForEducation />
              </h2>
              <div>
                <h3>Master in Web Development</h3>
                <p>I have learned web development from 30DaysOfCoding.</p>
              </div>
              <div>
                <h3>Computer Engineering IOT</h3>
                <p>
                  At present, I'm pursuing my B.Tech in Computer Science IOT in
                  batch 2022 to 2026.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rightbox"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="work">
              <h2>
                Work <IoCodeWorkingSharp />
              </h2>
              <div>
                <h3>Frontend Developer Intern</h3>
                <p>
                  I worked for @InternPe as a Frontend Developer in July 2024.
                </p>
              </div>
              <div>
                <h3>Frontend Developer Intern</h3>
                <p>
                  I worked for @CodeSoft as a Frontend Developer in August 2023.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Qualifications;
