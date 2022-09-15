import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import RouterWrapper from '../testHelpers/RouterWrapper';
import MainMenu from '../components/MainMenu';
import { paths } from '../utils';

describe('Main Menu', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <RouterWrapper>
        <MainMenu />
      </RouterWrapper>
    );
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });

  it('displays all the links', () => {
    render(
      <RouterWrapper>
        <MainMenu />
      </RouterWrapper>
    );

    Object.keys(paths).forEach((key) => expect(screen.getByText(key)).toBeInTheDocument());
  });
});
