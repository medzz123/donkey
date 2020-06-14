import React from 'react';
import TestRenderer from 'react-test-renderer';

import Payments from '.';

describe('<Payments />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Payments />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
