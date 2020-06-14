import React from 'react';
import TestRenderer from 'react-test-renderer';

import VirtualizedTable from '.';

const data = [
  { username: 'Ugendo', name: 'Uga' },
  { username: 'Bugendo', name: 'Buga' },
];

describe('<VirtualizedTable />', () => {
  it('should render without throwing an error and match snapshot', () => {
    const testRenderer = TestRenderer.create(
      <VirtualizedTable
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        columns={[
          {
            width: 120,
            label: 'Name',
            dataKey: 'username',
          },
          {
            width: 120,
            label: 'Lies',
            dataKey: 'name',
          },
        ]}
      />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
