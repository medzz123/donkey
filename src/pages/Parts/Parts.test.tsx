import React from 'react';
import TestRenderer from 'react-test-renderer';

import Parts from '.';

describe('<Parts />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Parts />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
