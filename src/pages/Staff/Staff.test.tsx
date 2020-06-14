import { MockedProvider } from '@apollo/react-testing';
import { USERS_LIST_QUERY } from '@domain/queries/user';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Staff from '.';

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

describe('<Staff />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Staff />
      </MockedProvider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
