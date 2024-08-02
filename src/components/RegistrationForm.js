import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'animate.css/animate.min.css';
 // Ensure this file exists and contains necessary styles

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email });
    history.push('/challenge'); 
  };

  return (
    <div className="registration-container animate__animated animate__fadeIn ">
     <div className='row animate__animated animate__fadeInTopLeft'>
      <img src="./image.png" alt="logo" className="elogo1 "/>
      <p style={{color:"white"}}>Challenge</p>
      </div>
      <div className="card animate__animated animate__zoomIn">
        <form onSubmit={handleSubmit} className="registration-form">
          <h1 className="typewriter animate__animated animate__fadeInDown" style={{fontSize:"25px"}}>Register for the Event</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="animate__animated animate__fadeInUp"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="animate__animated animate__fadeInUp"
          />
          <button type="submit" className="animate__animated animate__fadeInUpBig">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
