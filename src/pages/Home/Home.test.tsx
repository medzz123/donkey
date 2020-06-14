import React from 'react';
import TestRenderer from 'react-test-renderer';

import Home from '.';

describe('<Home />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Home />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
