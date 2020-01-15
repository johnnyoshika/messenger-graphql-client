import gql from 'graphql-tag';

export const ADD_CHANNEL = gql`
  mutation($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;