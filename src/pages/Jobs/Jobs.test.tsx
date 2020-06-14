import React from 'react';
import TestRenderer from 'react-test-renderer';

import Jobs from '.';

describe('<Jobs />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Jobs />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
