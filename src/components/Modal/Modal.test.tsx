import React from 'react';
import TestRenderer from 'react-test-renderer';

import Modal from '.';

describe('<Modal />', () => {
  // Testing modals is a bitch, because createPortal is not mocked
  // https://github.com/facebook/react/issues/11565
  it.skip('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Modal open={true} onClose={jest.fn()}>
        <div>Ugendo</div>
      </Modal>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
