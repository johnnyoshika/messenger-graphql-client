import gql from 'graphql-tag';

import { MESSAGE_FRAGMENT } from './fragments';

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription($channelId: ID!) {
    messageAdded(channelId: $channelId) {
      ...message
    }
  }
  ${MESSAGE_FRAGMENT}
`;