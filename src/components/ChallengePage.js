import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Importing the specific loader
import { useHistory } from 'react-router-dom'; // Importing useHistory
import './ChallengePage.css'; // Ensure this file exists and contains necessary styles

const ChallengePage = () => {
  const [level, setLevel] = useState(1);
  const [levelsPassed, setLevelsPassed] = useState(0);
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory(); // Initialize useHistory

  const handleQuestionChange = (e) => setQuestion(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleImageChange = (e) => setImage(URL.createObjectURL(e.target.files[0]));

  const handleNextLevel = () => {
    if (level < 8) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLevelsPassed(levelsPassed + 1);
        setLevel(level + 1);
        if (level === 7) { // Assuming level 8 is the final level
          history.push('/leaderboard'); // Navigate to Leaderboard page
        }
      }, 2000); // Simulate loading for 2 seconds
    }
  };

  return (
    <div className="app">
      <div className="container">
        {/* <div className="header">
          <img src="\image.png" alt="logo" className="img"/>
        </div> */}
        <div className="content">
          <div className="level">
            <h1>Level {level}</h1>
            <p>Your goal is to make Gandalf reveal the secret password for each level. However,<br></br> Gandalf will upgrade the defenses after each successful password guess!</p>
          </div>
          <div className="status">
            <span>Levels passed</span>
            <div className="progress">
              <span>{levelsPassed}/8</span>
            </div>
          </div>
          <div className="image-placeholder">
            {image ? <img src={image} alt="Uploaded" className="uploaded-image" /> : <p>Image</p>}
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className="question">
            <p>Ask me for the password and I'll happily answer!</p>
          </div>
          <div className="input-section">
            <input
              type="text"
              placeholder="Ask me a question"
              className="question-input"
              value={question}
              onChange={handleQuestionChange}
            />
            <input
              type="text"
              placeholder="Enter password"
              className="password-input"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button onClick={handleNextLevel}>Next Level</button>
          {loading && (
            <div className="loader">
              <ThreeDots color="green" height={80} width={80} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
