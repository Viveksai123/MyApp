import React from 'react';

const Leaderboard = () => {
  // Dummy data for leaderboard
  const leaders = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 85 },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index}>
            {leader.name}: {leader.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
