import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Error from './shared/Error';

import { GET_CHANNEL } from '../queries';
import { ADD_MESSAGE } from '../mutations';

const updateMessages = (
  cache,
  {
    data: {
      addMessage: message
    }
  },
  channelId
) => {
  const data = cache.readQuery({
    query: GET_CHANNEL,
    variables: {
      id: channelId
    }
  });

  cache.writeQuery({
    query: GET_CHANNEL,
    variables: {
      id: channelId
    },
    data: {
      ...data,
      channel: {
        ...data.channel,
        messages: [
          ...data.channel.messages,
          message
        ]
      }
    }
  });
};

const AddMessage = ({ channelId }) => {
  const [message, setMessage] = useState('');

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    variables: {
      message: {
        channelId,
        text: message
      }
    },
    update: (cache, result) => updateMessages(cache, result, channelId)
  });

  const onChange = e => setMessage(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
    const previous = message;
    setMessage('');
    addMessage().catch(() => setMessage(previous));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="New message"
          onChange={onChange}
          value={message} />
      </form>
    </>
  );
};

export default AddMessage;
