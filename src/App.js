import React from 'react';
import logo from './logo.svg';
import './App.css';

const ChannelsList = () => (
  <ul className="Item-list">
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>
);

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