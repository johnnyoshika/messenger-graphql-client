import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Error from './shared/Error';
import Loading from './shared/Loading';
import NotFound from './shared/NotFound';
import MessagesList from './MessagesList';

import { GET_CHANNEL } from '../queries';

const ChannelDetails = ({ match: { params: { id } } }) => {
  const { data, loading, error, refetch } = useQuery(GET_CHANNEL, {
    variables: {
      id
    }
  });

  const retry = () => refetch().catch(() => {}); // Unless we catch, a network error will cause an unhandled rejection: https://github.com/apollographql/apollo-client/issues/3963

  if (error)
    return (
      <Error error={error}>
        <div>
          <button type="button" onClick={retry}>Try again!</button>
        </div>
      </Error>
    );

  if (loading && !data) return <Loading />;

  const { channel } = data;

  if (!channel) return <NotFound />;

  return (
    <div>
      <h2>
        {channel.name}
      </h2>
      <MessagesList messages={channel.messages} />
    </div>
  );
};

export default ChannelDetails;