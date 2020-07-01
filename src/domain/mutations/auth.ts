import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    signIn(login: $username, password: $password) {
      token
    }
  }
`;
