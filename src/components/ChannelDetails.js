import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Error from './shared/Error';
import NotFound from './shared/NotFound';
import MessagesList from './MessagesList';
import AddMessage from './AddMessage';
import ChannelPreview from './ChannelPreview';

import { GET_CHANNEL_DETAILS } from '../queries';
import { MESSAGE_ADDED_SUBSCRIPTION } from '../subscriptions';

const ChannelDetails = ({ match: { params: { id } } }) => {
  const { data, loading, error, refetch, subscribeToMore } = useQuery(GET_CHANNEL_DETAILS, {
    variables: {
      id
    },
    // Start with cache, but then fetch from network in case new messages were added
    // while we were away from this channel page, and therefore,
    // not subscribed to messageAdded subscription for this channel.
    fetchPolicy: 'cache-and-network'
  });

  subscribeToMore({
    document: MESSAGE_ADDED_SUBSCRIPTION,
    variables: {
      channelId: id
    },
    updateQuery: (prev, {subscriptionData}) => {
      if (!prev || !subscriptionData.data)
        return prev;

      const newMessage = subscriptionData.data.messageAdded;

      if (prev.channel.messageFeed.messages.some(m => m.id === newMessage.id))
        return prev;

      return {
        ...prev,
        channel: {
          ...prev.channel,
          messageFeed: {
            ...prev.channel.messageFeed,
            messages: [
              newMessage,
              ...prev.channel.messageFeed.messages
            ]
          }
        }
      };
    }
  });

  const retry = () => refetch().catch(() => {}); // Unless we catch, a network error will cause an unhandled rejection: https://github.com/apollographql/apollo-client/issues/3963

  // If there's data in cache, even if there's a network error while re-fetching, proceed and show the cache data
  if (error && !data)
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
      <AddMessage channelId={channel.id} />
      <MessagesList messages={channel.messageFeed.messages} />
    </div>
  );
};

export default ChannelDetails;