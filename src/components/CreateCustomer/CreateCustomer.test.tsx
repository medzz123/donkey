import React from 'react';
import TestRenderer from 'react-test-renderer';

import CreateCustomer from '.';

describe('<CreateCustomer />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <CreateCustomer onSuccess={jest.fn()} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
