import React from 'react';
import './Error.css';

const Error = ({ error }) => (
  <div className="Error">
    {error.toString()}
  </div>
);

export default Error;