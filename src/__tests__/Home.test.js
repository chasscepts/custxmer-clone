import React from 'react';
import renderer from 'react-test-renderer';
import RouterWrapper from '../testHelpers/RouterWrapper';
import Home from '../containers/Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <RouterWrapper>
        <Home />
      </RouterWrapper>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
});
