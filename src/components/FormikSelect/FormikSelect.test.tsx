import { Formik } from 'formik';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import FormikSelect from '.';

const data = [{ value: 'Uga', label: 'Buga' }];

describe('< FormikSelect />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <Formik initialValues={{ test: '' }} onSubmit={jest.fn()}>
        <FormikSelect name="Test" data={data} />
      </Formik>
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
