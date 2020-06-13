import { MockedProvider } from '@apollo/react-testing';
import { LOGIN_MUTATION } from '@domain/mutations/auth';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import LoginPage from '.';

const mocks = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        email: 'Ugendo@buugendo.com',
        password: '123',
      },
    },
    result: {
      data: {
        token: 'dont-look-bro',
      },
    },
  },
];

describe('<LoginPage />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <MockedProvider addTypename={false} mocks={mocks}>
        <LoginPage />
      </MockedProvider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
