import gql from 'graphql-tag';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($username: String!, $password: String!, $name: String!) {
    createUser(
      data: { username: $username, name: $name, password: $password }
    ) {
      token
    }
  }
`;
