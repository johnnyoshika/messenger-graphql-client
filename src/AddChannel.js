import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Error from './shared/Error';

import { ADD_CHANNEL } from './mutations';

const AddChannel = () => {
  const [channel, setChannel] = useState('');

  const [addChannel, { error }] = useMutation(ADD_CHANNEL, {
    variables: {
      name: channel
    }
  });
  
  const onChange = e => setChannel(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
    addChannel()
      .then(() => setChannel(''));
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