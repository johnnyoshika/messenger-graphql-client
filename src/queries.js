import gql from 'graphql-tag';
import { CHANNEL_FRAGMENT, CHANNEL_DETAILS_FRAGMENT } from './fragments';

export const GET_CHANNELS = gql`
  query {
    channels {
      ...channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;

export const GET_CHANNEL_DETAILS = gql`
  query($id: ID!) {
    channel(id: $id) {
      ...channelDetails
    }
  }
  ${CHANNEL_DETAILS_FRAGMENT}
`;