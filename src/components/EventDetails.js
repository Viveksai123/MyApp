import React from 'react';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="event-details">
      <img src="\image.png" alt="logo"/>
      <p style={{fontSize: "25px"}}>Join us for an exciting event focused on prompt engineering.<br></br> Challenge yourself and compete with others!</p>
      <p style={{fontSize: "25px"}}>Date: {currentDate}</p>
      <p style={{fontSize: "25px"}}>Location: Online</p>
      <Link to="/register">
        <button>Enter Event</button>
      </Link>
    </div>
  );
};

export default EventDetails;
