import gql from 'graphql-tag';

export const MESSAGE_FRAGMENT = gql`
  fragment message on Message {
    id
    text
  }
`;

export const CHANNEL_FRAGMENT = gql`
  fragment channel on Channel {
    id
    name
  }
`;
