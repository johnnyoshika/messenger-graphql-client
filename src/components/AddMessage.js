import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Error from './shared/Error';

import { ADD_MESSAGE } from '../mutations';

const AddMessage = ({ channelId }) => {
  const [message, setMessage] = useState('');

  const [addMessage, { error }] = useMutation(ADD_MESSAGE, {
    variables: {
      message: {
        channelId,
        text: message
      }
    }
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
