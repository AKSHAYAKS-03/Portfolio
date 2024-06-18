import React from 'react';
import linkedin from '../assets/images/linkedin.png';
import insta from '../assets/images/insta.jpg';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
     <h1>Contact</h1>

      <div className="contact-content">
        <div className="social-media">
          <img src={linkedin} alt="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/akshaya-senthilkumar-123487270/')} />
          <img src={insta} alt="Instagram" onClick={() => window.open('https://www.instagram.com/_akshayaks_/')} />
          <p><strong>+91 7305065593</strong></p>

        </div><br></br>
        <div className="contact-details">
          <div>
            <h2><strong>Akshaya Ks</strong></h2>
            <p>19/3 Sevugan Chettiar street</p>
            <p>Athikulam</p>
            <p>Madurai</p>
          </div>
        </div>
        
        <br></br>
      </div>
    

    </div>
  );
};

export default Contact;
