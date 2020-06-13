import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CreateUser from '.';
import { CREATE_USER_MUTATION } from '@domain/mutations/user';

const mocks = [
  {
    request: {
      query: CREATE_USER_MUTATION,
      variables: {
        username: 'Ugendo@buugendo.com',
        password: '123',
        name: 'Sickendo',
      },
    },
    result: {
      data: {
        token: 'dont-look-bro',
      },
    },
  },
];

describe('<CreateUser />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <MockedProvider addTypename={false} mocks={mocks}>
        <CreateUser
          onSuccess={jest.fn()}
          open={false}
          handleClose={jest.fn()}
        />
      </MockedProvider>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
