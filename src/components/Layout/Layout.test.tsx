import React from 'react';
import TestRenderer from 'react-test-renderer';

import Layout from '.';

describe('<Layout />', () => {
  it('should wrap children with the layout', () => {
    const testRenderer = TestRenderer.create(
      <Layout showLayout={true} currentRoute="/home">
        <div>Hi</div>
      </Layout>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render children without the layout', () => {
    const testRenderer = TestRenderer.create(
      <Layout showLayout={false} currentRoute="/home">
        <div>Hi</div>
      </Layout>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
