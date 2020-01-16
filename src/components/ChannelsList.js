import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHANNELS } from '../queries';

import Error from './shared/Error';
import Loading from './shared/Loading';
import AddChannel from './AddChannel';

import './ChannelsList.css';

const ChannelsList = () => {
  const { data, loading, error, refetch } = useQuery(GET_CHANNELS);

  const retry = () => {
    refetch().catch(() => {}); // Unless we catch, a network error will cause an unhandled rejection: https://github.com/apollographql/apollo-client/issues/3963
  };
  
  if (error)
    return (
      <Error error={error}>
        <div>
          <button type="button" onClick={retry}>Try again!</button>
        </div>
      </Error>
    );

  if (loading && !data) return <Loading />;

  const { channels } = data;

  return (
    <div className="ChannelsList">
      <AddChannel />
      {channels.map(channel => (
        <div key={channel.id} className={channel.id.startsWith('_') ? 'ChannelsList-optimistic' : ''}>{channel.name}</div>
      ))}
    </div>
  );
};

export default ChannelsList;
