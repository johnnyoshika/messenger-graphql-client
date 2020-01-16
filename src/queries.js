import gql from 'graphql-tag';

export const GET_CHANNELS = gql`
  query {
    channels {
      id
      name
    }
  }
`;

export const GET_CHANNEL = gql`
  query($id: ID!) {
    channel(id: $id) {
      id
      name
      messages {
        id
        text
      }
    }
  }
`;