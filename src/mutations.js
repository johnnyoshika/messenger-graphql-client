import gql from 'graphql-tag';
import { MESSAGE_FRAGMENT } from './fragments';

export const ADD_CHANNEL = gql`
  mutation($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation($message: MessageInput!) {
    addMessage(message: $message) {
      ...message
    }
  }
  ${MESSAGE_FRAGMENT}
`;