import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Loading from './shared/Loading';

import { GET_CHANNEL } from '../queries';

const ChannelPreview = ({ id }) => {

  const { data, loading, error } = useQuery(GET_CHANNEL, {
    variables: {
      id
    },
    fetchPolicy: 'cache-only'
  });

  if (loading || error || !data) return <Loading />;

  const { channel } = data;

  if (!channel) return <Loading />;

  return (
    <div>
      <h2>
        {channel.name}
      </h2>
      <Loading />
    </div>
  );
};

export default ChannelPreview;