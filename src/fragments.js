import gql from 'graphql-tag';

export const MESSAGE_FRAGMENT = gql`
  fragment message on Message {
    id
    text
  }
`;