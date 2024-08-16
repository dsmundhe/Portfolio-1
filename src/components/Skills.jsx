import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <div>
      <motion.div
        className="skillbox"
        initial="hidden"
        whileInView="visible"
        variants={skillVariants}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="upline">
          <div className="upline1"></div>
        </div>
        <div className="skillheading">
          <div>
            <h1>Skills</h1>
            <p>My favorite skills</p>
          </div>
        </div>

        <div className="skillicons">
          <motion.div
            className="upper"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/11/31/47/113147d28d48c557957d872f1b71cb3b.jpg"
                alt="html image"
              />
              <h3>HTML</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/dd/50/47/dd504752d681941a6a5b22829548eb56.jpg"
                alt="css image"
              />
              <h3>CSS</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/38/4d/1e/384d1e8c3c8dcfee10ab0b980f8075cd.jpg"
                alt="js image"
              />
              <h3>JS</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/3e/7b/80/3e7b80011cddd3c1f8725bc416d389f6.jpg"
                alt="react image"
              />
              <h3>REACT JS</h3>
            </div>
          </motion.div>

          <motion.div
            className="bottom"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/0b/dc/c4/0bdcc4d5aee923ae756a45211f74541f.jpg"
                alt="c image"
              />
              <h3>C</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/8d/0c/72/8d0c72f49aaa0a6a35d34c7b98035baa.jpg"
                alt="java image"
              />
              <h3>JAVA</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/01/81/d4/0181d4bdd9c2c87c856ea5b97e32fc63.jpg"
                alt="vs code image"
              />
              <h3>VS CODE</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg"
                alt="git image"
              />
              <h3>GIT & GITHUB</h3>
            </div>
          </motion.div>

          <motion.div
            className="bottom1"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <div className="box">
              <img
                src="https://www.bytestechnolab.com/wp-content/uploads/2022/12/our-express-js-webapp-development.webp"
                alt="express js image"
              />
              <h3>EXPRESS JS</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/a3/02/10/a302105c53a9506950a5cbd2959ad553.jpg"
                alt="redux image"
              />
              <h3>REDUX JS</h3>
            </div>
            <div className="box">
              <img
                src="https://i.pinimg.com/564x/08/86/77/0886779176db12da5565ca4b9541e2b8.jpg"
                alt="node js image"
              />
              <h3>NODE JS</h3>
            </div>
            <div className="box">
              <img
                src="https://miro.medium.com/v2/resize:fit:1000/0*8v1xNP18Ovj3wg6K.gif"
                alt="mongo db image"
              />
              <h3>MONGO DB</h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
