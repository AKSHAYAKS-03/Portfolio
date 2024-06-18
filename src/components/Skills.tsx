// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
{ skill: 'Python', percentage: 80 },
{ skill: 'Java', percentage: 90 },
{ skill: 'C', percentage: 78 },
{ skill: 'React', percentage: 50 },
{ skill: 'HTML', percentage: 79 },
{ skill: 'CSS', percentage: 89 },
{ skill: 'JavaScript', percentage: 76 },
];

const Skills = () => {
  return (
    <div className="skills-container">
        <br></br><br></br><br></br>
        <br></br><strong><h1>Programming Languages</h1></strong>
        <br></br><div className="skills">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
         <br></br>   <div className="skill-value">{skill.percentage}%</div>

         <br></br>    <div className="skill-bar">

              <div className="skill-percentage" style={{ height: `${skill.percentage}%`}}></div>
            </div>

               <div className="skill-name">{skill.skill}</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
