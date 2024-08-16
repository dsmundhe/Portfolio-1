import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Project data
const projects = [
  {
    title: "eCommerce",
    description: "Description of Project 1",
    image: "https://i.pinimg.com/564x/1d/05/54/1d055474cc491f4832052111c2f76d00.jpg",
    link: "https://ecommercedm.netlify.app/"
  },
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
  // Add more projects as needed
];

// Animation variants for bottom-to-top effect
const cardVariants = {
  hidden: { opacity: 0, y: 100 }, // Start from below the viewport
  visible: { opacity: 1, y: 0 },  // Move to final position
};

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial="hidden" // Start with hidden state
            animate="visible" // Animate to visible state
            variants={cardVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} // Staggered effect
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="card__image" />
              <div className="card__content">
                <p className="card__title">{project.title}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Projects;
