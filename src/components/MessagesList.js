import React from 'react';

import './MessagesList.css';

const MessagesList = ({ messages }) => {
  const isOptimistic = message => message.id.startsWith('_');

  return (
    <>
      {messages.map(message => (
        <div
          key={message.id}
          className={'MessagesList-item' + (isOptimistic(message) ? ' optimistic' : '')}
        >
          {message.text}
        </div>
      ))}
    </>
  )
}

export default MessagesList;