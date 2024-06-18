import React, { useState } from 'react';
import './Achievements.css'; // Import the CSS file for styling

const Achievements = () => {
  const [showLeetCode, setShowLeetCode] = useState(false);
  const [showGeeksForGeeks, setShowGeeksForGeeks] = useState(false);
  const [showHackerRank, setShowHackerRank] = useState(false);

  const toggleLeetCode = () => {
    setShowLeetCode(!showLeetCode);
    setShowGeeksForGeeks(false); // Close GeeksForGeeks profile when opening LeetCode profile
    setShowHackerRank(false); // Close HackerRank profile when opening LeetCode profile
  };

  const toggleGeeksForGeeks = () => {
    setShowGeeksForGeeks(!showGeeksForGeeks);
    setShowLeetCode(false); // Close LeetCode profile when opening GeeksForGeeks profile
    setShowHackerRank(false); // Close HackerRank profile when opening GeeksForGeeks profile
  };

  const toggleHackerRank = () => {
    setShowHackerRank(!showHackerRank);
    setShowLeetCode(false); // Close LeetCode profile when opening HackerRank profile
    setShowGeeksForGeeks(false); // Close GeeksForGeeks profile when opening HackerRank profile
  };

  return (
    <div className="achi-top">
      <h1>Achievements</h1>
      <div className="achi-container">
        <div className="name" onClick={toggleLeetCode}>
          <strong>LEETCODE</strong>
        </div>
        {showLeetCode && (
          <div className="iframe-container">
            <iframe
              src="https://leetcode.com/u/AKSHAYA_02/"
              title="LeetCode Profile"
              width="100%"
              height="600px"
              frameBorder="0"
            />
          </div>
        )}
      </div>
      <div className="achi-container">
        <div className="name" onClick={toggleGeeksForGeeks}>
          <strong>GEEKSFORGEEKS</strong>
        </div>
        {showGeeksForGeeks && (
          <div className="iframe-container">
            <iframe
              src="https://www.geeksforgeeks.org/user/akshayasent79iz/"
              title="GeeksForGeeks Profile"
              width="100%"
              height="600px"
              frameBorder="0"
            />
          </div>
        )}
      </div>
      <div className="achi-container">
        <div className="name" onClick={toggleHackerRank}>
          <strong>HACKERRANK</strong>
        </div>
        {showHackerRank && (
          <div className="iframe-container">
            <iframe
              src="https://www.hackerrank.com/profile/22CSEB03_AKSHAYA"
              title="HackerRank Profile"
              width="100%"
              height="600px"
              frameBorder="0"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
