import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHANNELS } from '../queries';

import Error from './shared/Error';
import Loading from './shared/Loading';
import AddChannel from './AddChannel';

const ChannelsList = () => {
  const { data, loading, error, refetch } = useQuery(GET_CHANNELS);

  const retry = () => {
    refetch().catch(() => { }); // Unless we catch, a network error will cause an unhandled rejection: https://github.com/apollographql/apollo-client/issues/3963
  };

  const isOptimistic = channel => channel.id.startsWith('_');

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
    <div>
      <h2>Channels</h2>
      <AddChannel />
      {channels.map(channel => (
        <div key={channel.id} className={isOptimistic(channel) ? 'optimistic' : ''}>
          {isOptimistic(channel) ? (
            <span>{channel.name}</span>
          ) : (
            <Link to={`/channels/${channel.id}`}>
              {channel.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChannelsList;
