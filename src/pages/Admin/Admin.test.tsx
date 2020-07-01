import React from 'react';
import TestRenderer from 'react-test-renderer';

import Admin from './Admin';

describe('<Admin />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Admin />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
