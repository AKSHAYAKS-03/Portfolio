// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for styling
import image1 from '../assets/images/Screenshot (1973).png';
import image2 from '../assets/images/Screenshot (1976).png';
import image3 from '../assets/images/Screenshot (1980).png';
import image4 from '../assets/images/Screenshot (1981).png';
import image5 from '../assets/images/Screenshot (1982).png';
import image6 from '../assets/images/Screenshot (1984).png';

import html from '../assets/images/html.png';
import cssImage from '../assets/images/css.png';
import js from '../assets/images/js.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <center>
        <div className="projects">
        <strong><h1>Projects</h1></strong>

          <div className="project">
            <a href="https://github.com/AKSHAYAKS-03/Social_Media_Management">
              <h2><strong>Social Media Management</strong></h2>
            </a>
            <table>
              <tr>
                <td><img src={image1} alt="SocialMedia1" width="420" height="250" /></td>
                <td><img src={image2} alt="SocialMedia2" width="420" height="250" /></td>
              </tr>
              <tr>
                <td><img src={image4} alt="SocialMedia4" width="420" height="250" /></td>
                <td><img src={image5} alt="SocialMedia5" width="420" height="250" /></td>
              </tr>
            </table>
            <div className='langs'>
              <h3>Language Used</h3>
              <img src={html} alt="html" width="100" height="100" />
              <img src={cssImage} alt="css" width="100" height="100" />
              <img src={js} alt="js" width="100" height="100" />
            </div>
          </div>
          <div className="project">
            Project 2
          </div>
          <div className="project">
            Project 3
          </div>
        </div>
      </center>
    </div>
  );
};

export default Projects;
