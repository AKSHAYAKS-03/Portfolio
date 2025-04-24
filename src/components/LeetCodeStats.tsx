import React, { useEffect, useState } from 'react';
import './Achievements1.css';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

const LeetCodeStats: React.FC = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/AKSHAYAKS_913122104014')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setData(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching LeetCode data:', error);
      });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="leetcode-card">
      <h3>LeetCode Stats</h3>
      <p><strong>Total Solved:</strong> {data.totalSolved}/{data.totalQuestions}</p>
      <p><strong>Easy:</strong> {data.easySolved} | <strong>Medium:</strong> {data.mediumSolved} | <strong>Hard:</strong> {data.hardSolved}</p>
      <p><strong>Global Ranking:</strong> {data.ranking}</p>
    </div>
  );
};

export default LeetCodeStats;
