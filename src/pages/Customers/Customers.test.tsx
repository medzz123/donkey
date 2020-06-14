import React from 'react';
import TestRenderer from 'react-test-renderer';

import Customers from '.';

describe('<Customers />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Customers />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
