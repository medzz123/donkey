import { MockedProvider } from '@apollo/react-testing';
import { USERS_LIST_QUERY } from '@domain/queries/user';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Users from '.';

const mocks = [
  {
    request: {
      query: USERS_LIST_QUERY,
    },
    result: {
      data: {
        users: [{ name: 'Ugendo', username: 'Bugendo' }],
      },
    },
  },
];

describe('<Users />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Users />
      </MockedProvider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
