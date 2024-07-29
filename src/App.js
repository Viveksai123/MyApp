import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import ChallengePage from './components/ChallengePage';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleRegister = (user) => {
    setRegisteredUser(user);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={EventDetails} />
          <Route path="/register" render={() => (
            <RegistrationForm onRegister={handleRegister} />
          )} />
          <Route path="/challenge" render={() => (
            registeredUser ? <ChallengePage /> : <Redirect to="/register" />
          )} />
          <Route path="/leaderboard" render={() => (
            registeredUser ? <Leaderboard /> : <Redirect to="/register" />
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
