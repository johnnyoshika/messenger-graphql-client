import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Error from './shared/Error';
import NotFound from './shared/NotFound';
import MessagesList from './MessagesList';
import AddMessage from './AddMessage';
import ChannelPreview from './ChannelPreview';

import { GET_CHANNEL_DETAILS } from '../queries';

const ChannelDetails = ({ match: { params: { id } } }) => {
  const { data, loading, error, refetch } = useQuery(GET_CHANNEL_DETAILS, {
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

  if (loading && !data) return <ChannelPreview id={id} />;

  const { channel } = data;

  if (!channel) return <NotFound />;

  return (
    <div>
      <h2>
        {channel.name}
      </h2>
      <MessagesList messages={channel.messages} />
      <AddMessage channelId={channel.id} />
    </div>
  );
};

export default ChannelDetails;