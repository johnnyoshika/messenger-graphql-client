import React from 'react';

const MessagesList = ({ messages }) => {
  const isOptimistic = message => message.id.startsWith('_');

  return (
    <>
      {messages.map(message => (
        <div key={message.id} className={isOptimistic(message) ? 'optimistic' : ''}>{message.text}</div>
      ))}
    </>
  )
}

export default MessagesList;