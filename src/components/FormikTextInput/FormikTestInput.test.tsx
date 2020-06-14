import { Formik } from 'formik';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import FormikTextInput from '.';

describe('< FormikTextInput />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Formik initialValues={{ test: '' }} onSubmit={jest.fn()}>
        <FormikTextInput name="Test" />
      </Formik>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
