import gql from 'graphql-tag';

export const CREATE_USER_QUERY = gql`
  mutation CreateUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;
