import React, { useState } from 'react';
import 'animate.css/animate.min.css';
import { ThreeDots } from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import './ChallengePage.css';

const ChallengePageLevel5 = () => {
  const [question, setQuestion] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [answer, setAnswer] = useState('');

  const history = useHistory();

  const handleQuestionChange = (e) => setQuestion(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleNextLevel = () => {
    setLoading(true);
    setAnimation(true);
    setAnswer('');
    setTimeout(() => {
      setLoading(false);
      setAnimation(false);
      history.push('/level6'); // Redirect to the next level
      setAnswer(`This is the answer for your question: ${question}`);
    }, 2000);
  };

  return (
    <div className={`app ${animation ? 'animate__animated animate__fadeIn' : ''}`}>
      <div className="border-container">
        <div className="container">
          <div className="content">
            <div className="header animate__animated animate__fadeIn">
              <img src="./image1.png" alt="logo" className="elogo" />
            </div>
            <div className={`level ${animation ? 'animate__animated animate__bounce' : ''}`}>
              <span style={{ fontSize: '35px' }}>Level 5</span>
              <p>Keep going! This level is trickier, but you're up for the challenge.</p>
            </div>
            <div className={`status ${animation ? 'animate__animated animate__flash' : ''}`}>
              <span>Levels passed</span>
              <div className="progress">
                <span>4 /8</span>
              </div>
            </div>
            <div className={`image-placeholder ${animation ? 'animate__animated animate__zoomIn' : ''}`}>
              <img src={"a"} alt="IMAGE1" className="uploaded-image" />
            </div>
            <div className={`question ${animation ? 'animate__animated animate__flipInX' : ''}`}>
              <p style={{marginLeft:"3vw"}}>Ask me for the password and I'll happily answer!</p>
            </div>
            <div className={`input-section ${animation ? 'animate__animated animate__slideInUp' : ''}`}>
              <input
                type="text"
                placeholder="Ask me a question"
                className="question-input"
                value={question}
                onChange={handleQuestionChange}
              />
              <div>
                {/* <p style={{color:"white"}}>{answer}</p> */}
              </div>
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
    </div>
  );
};

export default ChallengePageLevel5;
