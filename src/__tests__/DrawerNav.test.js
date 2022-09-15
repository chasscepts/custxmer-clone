import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import RouterWrapper from '../testHelpers/RouterWrapper';
import DrawerNav from '../components/DrawerNav';
import { paths } from '../utils';

describe('Drawer Navigation', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <RouterWrapper>
        <DrawerNav onClose={() => {}} />
      </RouterWrapper>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });

  it('displays all the links', () => {
    render(
      <RouterWrapper>
        <DrawerNav onClose={() => {}} />
      </RouterWrapper>,
    );

    Object.keys(paths).forEach((key) => expect(screen.getByText(key)).toBeInTheDocument());
  });
});
