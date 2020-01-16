import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Error from './shared/Error';

import { GET_CHANNELS } from '../queries';
import { ADD_CHANNEL } from '../mutations';

const updateChannels = (cache, { data: { addChannel: channel } }) => {
  const data = cache.readQuery({
    query: GET_CHANNELS
  });

  cache.writeQuery({
    query: GET_CHANNELS,
    data: {
      ...data,
      channels: [
        ...data.channels,
        channel
      ]
    }
  });
};

const AddChannel = () => {
  const [channel, setChannel] = useState('');

  const [addChannel, { error }] = useMutation(ADD_CHANNEL, {
    variables: {
      name: channel
    },
    optimisticResponse: {
      addChannel: {
        __typename: 'Channel',
        id: '_' + Math.round(Math.random() * 1000000),
        name: channel
      }
    },
    update: updateChannels
  });
  
  const onChange = e => setChannel(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
    const previous = channel;
    setChannel('');
    addChannel().catch(() => setChannel(previous));
  };

  return (
    <>
      {error && <Error error={error} />}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="New channel"
          onChange={onChange}
          value={channel} />
      </form>
    </>
  );
};

export default AddChannel;