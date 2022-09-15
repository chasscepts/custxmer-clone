import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RouterWrapper from '../testHelpers/RouterWrapper';
import Home from '../containers/Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <RouterWrapper>
        <Home />
      </RouterWrapper>
    );
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
});
