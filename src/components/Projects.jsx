import React, { useState } from 'react';
import './Projects.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";

const projects = [
  {
    title: "HostelDekho",
    description: "Description of Project 1",
    image: "https://i.pinimg.com/564x/b8/5f/84/b85f84dcb1821dfb54dd31bfa8ff1fab.jpg",
    link: "https://hosteldekho.netlify.app/"
  },
  {
    title: "Shopping cart",
    description: "Description of Project 2",
    image: "https://i.pinimg.com/564x/f7/6b/0d/f76b0d4485308d6d74b3a84ca7300c56.jpg",
    link: "https://shoppingcartdm.netlify.app/"
  },
  {
    title: "TO-DO list",
    description: "Description of Project 3",
    image: "https://i.pinimg.com/564x/24/51/50/245150d3136728d71bd7da2f2ecf915c.jpg",
    link: "https://todolistdm.netlify.app/"
  },
  {
    title: "E-commerce page",
    description: "Description of Project 4",
    image: "https://i.pinimg.com/564x/16/ed/2b/16ed2b9502f6c18c50590f2f6b562f95.jpg",
    link: "https://github.com/dsmundhe/E-commerce-website-clone-UI.git"
  },
  {
    title: "Password Generator",
    description: "Description of Project 5",
    image: "https://i.pinimg.com/564x/4b/d5/e3/4bd5e39639a87281a2f001dd9ec7c6ee.jpg",
    link: "https://github.com/dsmundhe/Password-Generator.git"
  },
  {
    title: "Calculator",
    description: "Description of Project 6",
    image: "https://i.pinimg.com/564x/09/54/5d/09545db8ad0f392710a13afac0c283d9.jpg",
    link: "https://github.com/dsmundhe/Calculator-task-1.git"
  },
  {
    title: "Form validation",
    description: "Description of Project 7",
    image: "https://i.pinimg.com/564x/89/c1/01/89c1014ba28ff30074257a3a2cb576b9.jpg",
    link: "https://github.com/dsmundhe/Form-validation-.git"
  },
  {
    title: "Spotify clone",
    description: "Description of Project 8",
    image: "https://i.pinimg.com/564x/9f/09/54/9f0954d7b277e13a0821a416e1b94eb3.jpg",
    link: "https://project2.com"
  },
  {
    title: "Amazon clone",
    description: "Description of Project 9",
    image: "https://i.pinimg.com/564x/89/6c/5b/896c5bae8a9ef75618c6f6969a4248cd.jpg",
    link: "https://github.com/dsmundhe/Amazon-clone.git"
  },
  {
    title: "Netflix clone",
    description: "Description of Project 10",
    image: "https://i.pinimg.com/564x/3d/9e/0c/3d9e0c28995126a15a242eeb93ef8690.jpg",
    link: "https://github.com/dsmundhe/Netflix-clone.git"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
   <div>
    <div className="upline">
      <div className="upline1"></div>
    </div>
      <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card ${index === currentProjectIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={handlePrev}><IoMdArrowRoundBack /></button>
        <button className="nav-button" onClick={handleNext}><GrFormNextLink />
        </button>
      </div>
    </div>
   </div>
  );
};

export default Projects;
