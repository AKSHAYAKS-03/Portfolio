import React, { useState } from 'react';
import './Achievements.css';
import leetcodeImg from '../assets/leetcode.jpg'; // Optional LeetCode banner or logo
import hackerrankImg from '../assets/hackerrank.png'; // Optional
import gfgImg from '../assets/gfg.png'; // Optional

const Achievements = () => {
  const [activeProfile, setActiveProfile] = useState('');

  const handleToggle = (profile: string) => {
    setActiveProfile(prev => (prev === profile ? '' : profile));
  };

  return (
    <div className="achi-top">
      <h1>Achievements</h1>
      <br></br>
      <center>
      <div className="achi-container">
        <button className="achi_name" onClick={() => handleToggle('leetcode')}>
          <strong>LEETCODE</strong>
        </button>
        {activeProfile === 'leetcode' && (
          <div className="iframe-container">
            <img src={leetcodeImg} alt="LeetCode" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
            <p>
              LeetCode doesn't allow embedding —{' '}
              <a
                href="https://leetcode.com/AKSHAYAKS_913122104014/"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </p>
          </div>
        )}
      </div>

      <div className="achi-container">
        <button className="achi_name" onClick={() => handleToggle('geeksforgeeks')}>
          <strong>GEEKSFORGEEKS</strong>
        </button>
        {activeProfile === 'geeksforgeeks' && (
          <div className="iframe-container">
            <img src={gfgImg} alt="geeksforgeeks" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
            <p>
              LeetCode doesn't allow embedding —{' '}
              <a
                href="https://www.geeksforgeeks.org/user/akshayasent79iz/"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </p>
          </div>
        )}
      </div>
      

      <div className="achi-container">
        <button className="achi_name" onClick={() => handleToggle('hackerrank')}>
          <strong>HACKERRANK</strong>
        </button>
        {activeProfile === 'hackerrank' && (
          <div className="iframe-container">
            <img src={hackerrankImg} alt="geeksforgeeks" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
            <p>
              LeetCode doesn't allow embedding —{' '}
              <a
                href="https://www.hackerrank.com/profile/22CSEB03_AKSHAYA"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </p>
          </div>
        )}
      </div> 
      </center>   
    </div>
  );
};

export default Achievements;
