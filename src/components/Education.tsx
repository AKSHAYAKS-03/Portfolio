// src/components/Education.js
import React from 'react';
import './Education.css'; // Import the CSS file for styling

const Education = () => {
  return (
    <div id="education" className="education-section">
      <strong><h1>Education</h1></strong>
      <div className="education-details">
        <div className="education-item">
          <h3>Velammal College of Engineering and Technology</h3>
          <p>Computer Science</p>
          <p>GPA: 8.91 (4th Semester)</p>
          <p>Madurai, Tamil Nadu</p>
        </div>
        <div className="education-item">
          <h3>The TVS</h3>
          <p>Percentage: 94%</p>
          <p>Madurai, Tamil Nadu</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
