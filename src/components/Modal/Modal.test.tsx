import React from 'react';
import TestRenderer from 'react-test-renderer';
import Modal from '.';

describe('<Modal />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Modal open={true} handleClose={jest.fn()}>
        <div>Ugendo</div>
      </Modal>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
