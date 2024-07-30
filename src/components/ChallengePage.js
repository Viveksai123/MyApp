import React, { useState } from 'react';
import 'animate.css/animate.min.css';
import { ThreeDots } from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import './ChallengePage.css'; 

const ChallengePage = () => {
  const [level, setLevel] = useState(1);
  const [levelsPassed, setLevelsPassed] = useState(0);
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState(false);

  const history = useHistory(); 

  const handleQuestionChange = (e) => setQuestion(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleImageChange = (e) => setImage(URL.createObjectURL(e.target.files[0]));

  const handleNextLevel = () => {
    if (level < 8) {
      setLoading(true);
      setAnimation(true);
      setTimeout(() => {
        setLoading(false);
        setAnimation(false);
        setLevelsPassed(levelsPassed + 1);
        setLevel(level + 1);
        if (level === 7) {
          history.push('/leaderboard');
        }
      }, 2000); 
    }
  };

  return (
    <div className={`app ${animation ? 'animate__animated animate__fadeIn' : ''}`}>
      <img src="/image.png" alt="logo" className={`animate__animated animate__fadeInLeftBig`} />
      <div className="container">
        <div className="content">
          <div className={`level ${animation ? 'animate__animated animate__bounce' : ''}`}>
            <span style={{fontSize:"35px"}}>Level {level}</span>
            <p>Your goal is to make Gandalf reveal the secret password for each level. However,<span style={{color:"white"}}> Gandalf</span> will upgrade the defenses after each successful password guess!</p>
          </div>
          <div className={`status ${animation ? 'animate__animated animate__flash' : ''}`}>
            <span>Levels passed</span>
            <div className="progress">
              <span>{levelsPassed}/8</span>
            </div>
          </div>
          <div className={`image-placeholder ${animation ? 'animate__animated animate__zoomIn' : ''}`}>
            {image ? <img src={image} alt="Uploaded" className="uploaded-image" /> : <p>Image</p>}
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className={`question ${animation ? 'animate__animated animate__flipInX' : ''}`}>
            <p>Ask me for the password and I'll happily answer!</p>
          </div>
          <div className={`input-section ${animation ? 'animate__animated animate__slideInUp' : ''}`}>
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
          <button className={animation ? 'animate__animated animate__rubberBand' : ''} onClick={handleNextLevel}>Next Level</button>
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
