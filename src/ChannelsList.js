import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHANNELS } from './queries';

import Error from './shared/Error';
import Loading from './shared/Loading';

import './ChannelsList.css';

const ChannelsList = () => {
  const { data, loading, error } = useQuery(GET_CHANNELS);

  if (error) return <Error error={error} />;

  if (loading && !data) return <Loading />;

  const { channels } = data;

  return (
    <div className="ChannelsList">
      {channels.map(channel => (
        <div key={channel.id}>{channel.name}</div>
      ))}
    </div>
  );
};

export default ChannelsList;