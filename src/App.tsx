// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import Personal from './components/personal';
import Education from './components/Education';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';

import Contact from './components/Contact';



const App = () => {
  return (
    <div className="App">
      <TopBar /> 
      <section id="personal">
      <Personal /> 
      </section>     
      <section id="education">
      <Education />
      </section>      
      <section id="projects">
      <Projects />
      </section>  
      <section id="skills">
      <Skills />
      </section> 
      <section id="achievements">
      <Achievements />
      </section> 
      <section id="certificates">
      <Certificates />
      </section> 
      <section id="contact">
      <Contact />
      </section>                    
    </div>
  );
};

export default App;
{/* <section id="experience">
<Experience />
</section>    */}