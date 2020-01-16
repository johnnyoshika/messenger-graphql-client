import gql from 'graphql-tag';
import { CHANNEL_FRAGMENT, MESSAGE_FRAGMENT } from './fragments';

export const GET_CHANNELS = gql`
  query {
    channels {
      ...channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;

export const GET_CHANNEL = gql`
  query($id: ID!) {
    channel(id: $id) {
      ...channel
    }
  }
  ${CHANNEL_FRAGMENT}
`;

export const GET_CHANNEL_DETAILS = gql`
  query($id: ID!, $after: String) {
    channel(id: $id) {
      id
      name
      messageFeed(after:$after) {
        endCursor
        hasNextPage
        messages {
          ...message
        }
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;