import React from 'react';
import './Error.css';

const Error = ({ error, children }) => (
  <div className="Error">
    <div>
      {error.toString()}
    </div>
    {children}
  </div>
);

export default Error;