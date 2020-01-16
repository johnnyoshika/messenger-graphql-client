import React from 'react';

const MessagesList = ({ messages }) => {
  return (
    <>
      {messages.map(message => (
        <div key={message.id}>{message.text}</div>
      ))}
    </>
  )
}

export default MessagesList;