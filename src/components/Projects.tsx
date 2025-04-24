import './Projects.css';
import image1 from '../assets/images/Screenshot (1973).png';
import image2 from '../assets/images/Screenshot (1976).png';
import image3 from '../assets/images/Screenshot (1980).png';
import image4 from '../assets/images/Screenshot (1981).png';
import image5 from '../assets/images/Screenshot (1982).png';
import image6 from '../assets/images/Screenshot (1984).png';

import quiz2 from '../assets/images/quiz2.jpg';
import quiz3 from '../assets/images/quiz3.jpg';
import quiz4 from '../assets/images/quiz4.jpg';
import quiz5 from '../assets/images/quiz5.jpg';
import quiz6 from '../assets/images/quiz6.jpg';
import quiz7 from '../assets/images/quiz7.jpg'; 
import quiz8 from '../assets/images/quiz8.jpg';
import quiz9 from '../assets/images/quiz9.jpg';


import portfolio from '../assets/images/portfolio.png';
import portfolio2 from '../assets/images/portfolio2.png';
import portfolio3 from '../assets/images/portfolio3.png';
import portfolio4 from '../assets/images/portfolio4.png';
import portfolio5 from '../assets/images/portfolio5.png';
import portfolio6 from '../assets/images/portfolio6.png';


import { FaExternalLinkAlt } from 'react-icons/fa';
import html from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import js from '../assets/images/js.png';
import php from '../assets/images/php.png';
import reactimg from '../assets/reactimg.png';
import nodeimg from '../assets/nodeimg.png';

import React, { useState } from 'react';

// Define types for the project object
interface Project {
  title: string;
  link: string;
  images: string[];
  languages: string[];
}

// Array of projects with types
const projects: Project[] = [
  {
    title: 'Social Media Management',
    link: 'https://github.com/AKSHAYAKS-03/Social_Media_Management',
    images: [image1, image2, image3, image4, image5, image6],
    languages: [html, cssImage, js],
  },
  {
    title: 'BrainBite',
    link: 'https://github.com/AKSHAYAKS-03/Quiz',
    images: [quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9],
    languages: [html, cssImage, js,php],
  },
  {
    title: 'Project 3',
    link: 'https://github.com/yourusername/project3',
    images: [portfolio, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6],
    languages: [reactimg, nodeimg],
  },
];

const Projects: React.FC = () => {
  // Initialize state for tracking the current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>(
    projects.reduce((acc, _, index) => {
      acc[index] = 0; // Set each project's initial image index to 0
      return acc;
    }, {} as Record<number, number>)
  );

  // Function to go to the next image
  const nextImage = (index: number) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [index]: (prevState[index] + 1) % projects[index].images.length,
    }));
  };

  // Function to go to the previous image
  const prevImage = (index: number) => {
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [index]: (prevState[index] - 1 + projects[index].images.length) % projects[index].images.length,
    }));
  };

  return (
    <div className="projects-container">
      <center>
        <strong><h1>Projects</h1></strong>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h2><strong>{project.title}</strong> <FaExternalLinkAlt /></h2>
              </a>
              <div className="image-slider">
                <img
                  src={project.images[currentImageIndex[index]]}
                  alt={`${project.title}-image`}
                  className="project-image"
                />
                <div className="image-navigation">
                  <button className="prev-button" onClick={() => prevImage(index)}>
                    ⬅
                  </button>
                  <button className="next-button" onClick={() => nextImage(index)}>
                    ➡
                  </button>
                </div>
              </div>
              <div className="langs">
                <h3>Languages Used</h3>
                {project.languages.map((lang, idx) => (
                  <img src={lang} alt={`lang-${idx}`} key={idx} className="lang-icon" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default Projects;
