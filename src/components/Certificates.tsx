import React from 'react';
import './Certificates.css'; // Import the CSS file for styling
import aws from '../assets/aws.png';
import sql from '../assets/sql.png';
import mongodb from '../assets/mongodb.png';
import cv from '../assets/cv.png';
import nptel from '../assets/nptel.png';
import gyan from '../assets/gyan.png';


const Certificates = () => {
  return (
    <div className="achi-top">
      <h1>Certificates</h1>
      <div className="tables">
        <table>
          <tbody>                      
            <tr>            
              <td>
                <strong>AWS</strong>
                <div className="container">
                  <img src={aws} alt='awscertificate' />
                </div>
              </td>
              <td>
                <strong>SQL</strong>
                <div className="container">
                  <img src={sql} alt='awscertificate' />
                </div>
              </td>
              <td>
                <strong>MONGODB</strong>
                <div className="container">
                  <img src={mongodb} alt='awscertificate' />
                </div>
              </td>
            </tr>
            <tr>
            <td>
                <strong>COMPUTER VISION</strong>
                <div className="container">
                  <img src={cv} alt='awscertificate' />
                </div>
              </td>
              <td>
                <strong>NPTEL</strong>
                <div className="container">
                  <img src={nptel} alt='awscertificate' />
                </div>
              </td>
            <td>
                <strong>GYANMITRA</strong>
                <div className="container">
                  <img src={gyan} alt='awscertificate' />
                </div>
              </td>
              
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificates;
