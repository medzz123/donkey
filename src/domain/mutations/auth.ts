import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    loginUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;
