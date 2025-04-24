// src/components/TopBar.js
import React from 'react';
import './topbar.css'; // Import the CSS file for styling

const TopBar = () => {
  const scrollToSection = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <ul className="navbar-list">        
        <li className="navbar-item" onClick={() => scrollToSection('education')}>Education</li>
        <li className="navbar-item" onClick={() => scrollToSection('projects')}>Projects</li>
        <li className="navbar-item" onClick={() => scrollToSection('skills')}>Skills and Interests</li>
        <li className="navbar-item" onClick={() => scrollToSection('achievements')}>Achievements</li>
        <li className="navbar-item" onClick={() => scrollToSection('certificates')}>Certificates</li>
        <li className="navbar-item" onClick={() => scrollToSection('contact')}>Contact</li>
        <a href="/resume.pdf" download className="navbar-item resume-btn">Download Resume</a>
        </ul>
    </div>
  );
};

export default TopBar;
