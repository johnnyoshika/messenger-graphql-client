import React from 'react';

const ChannelDetails = ({ match: { params: { id } } }) => (
  <div>
    Channel: {id}
  </div>
);

export default ChannelDetails;