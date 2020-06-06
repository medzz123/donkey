import React from 'react';
import TestRenderer from 'react-test-renderer';
import Layout from '.';

describe('<Layout />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(<Layout showLayout={false} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
