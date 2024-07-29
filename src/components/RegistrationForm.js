import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email });
    history.push('/challenge'); // Navigate to the challenge page
  };

  return (
    <div >
    <img src="\image.png" alt="logo"/>
    <div className='card'>
    <form onSubmit={handleSubmit} className="registration-form">
      <h1>Register for the Event</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
