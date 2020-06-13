import React from 'react';
import TestRenderer from 'react-test-renderer';
import UsersTable from '.';

const data = [
  { username: 'Ugendo', name: 'Uga' },
  { username: 'Bugendo', name: 'Buga' },
];

describe('<UsersTable />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<UsersTable data={data} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
