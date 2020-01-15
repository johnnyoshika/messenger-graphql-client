import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHANNELS } from './queries';

import Error from './Error';
import Loading from './Loading';

import logo from './logo.svg';
import './App.css';


const ChannelsList = () => {
  const { data, loading, error } = useQuery(GET_CHANNELS);

  if (error) return <Error error={error} />;

  if (loading && !data) return <Loading />;

  const { channels } = data;

  return (
    <ul className="Item-list">
      {channels.map(channel => (
        <li key={channel.id}>{channel.name}</li>
      ))}
    </ul>
  );
}

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