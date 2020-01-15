import gql from 'graphql-tag';

export const GET_CHANNELS = gql`
  query {
    channels {
      id
      name
    }
  }
`;