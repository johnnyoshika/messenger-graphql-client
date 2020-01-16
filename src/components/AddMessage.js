import React, { useState } from 'react';

const AddMessage = () => {
  const [message, setMessage] = useState('');

  const onChange = e => setMessage(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
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
