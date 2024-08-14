import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import ChallengePageLevel1 from './components/ChallengePageLevel1';
import ChallengePageLevel2 from './components/ChallengePageLevel2';
import ChallengePageLevel3 from './components/ChallengePageLevel3';
import ChallengePageLevel4 from './components/ChallengePageLevel4';
import ChallengePageLevel5 from './components/ChallengePageLevel5';
import ChallengePageLevel6 from './components/ChallengePageLevel6';
import ChallengePageLevel7 from './components/ChallengePageLevel7';
import ChallengePageLevel8 from './components/ChallengePageLevel8';
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
          <Route path="/level1" render={() => (
            registeredUser ? <ChallengePageLevel1 /> : <Redirect to="/register" />
          )} />
          <Route path="/level2" render={() => (
            registeredUser ? <ChallengePageLevel2 /> : <Redirect to="/register" />
          )} />
          <Route path="/level3" render={() => (
            registeredUser ? <ChallengePageLevel3 /> : <Redirect to="/register" />
          )} />
          <Route path="/level4" render={() => (
            registeredUser ? <ChallengePageLevel4 /> : <Redirect to="/register" />
          )} />
          <Route path="/level5" render={() => (
            registeredUser ? <ChallengePageLevel5 /> : <Redirect to="/register" />
          )} />
          <Route path="/level6" render={() => (
            registeredUser ? <ChallengePageLevel6 /> : <Redirect to="/register" />
          )} />
          <Route path="/level7" render={() => (
            registeredUser ? <ChallengePageLevel7 /> : <Redirect to="/register" />
          )} />
          <Route path="/level8" render={() => (
            registeredUser ? <ChallengePageLevel8 /> : <Redirect to="/register" />
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
