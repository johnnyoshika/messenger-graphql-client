import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ChannelsList from './components/ChannelsList';
import ChannelDetails from './components/ChannelDetails';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h2>Welcome to Messenger</h2>
      </header>
        <Route exact path="/" component={ChannelsList} />
        <Route path="/channels/:id" component={ChannelDetails} />
    </div>
  </Router>
);

export default App;