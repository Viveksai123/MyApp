import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';
 // Make sure this file exists and contains necessary styles

const EventDetails = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="event-details animate__animated animate__fadeIn" style={{fontSize:"40px"}}>
      <img src="./image.png" alt="logo" className="event-logo"/>
      <p className="event-description typewriter">Join us for an exciting event focused on <span style={{color:"white"}}>prompt engineering</span>.<br /> Challenge yourself and compete with others!</p>
      <p className="event-date">Date: {currentDate}</p>
      <p className="event-location">Location: Online</p>
      <Link to="/register">
        <button className="enter-event-button">Enter Event</button>
      </Link>
    </div>
  );
};

export default EventDetails;
 
