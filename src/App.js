import React from 'react';

import ChannelsList from './components/ChannelsList';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Messenger</h2>
    </header>
    <ChannelsList />
  </div>
);

export default App;