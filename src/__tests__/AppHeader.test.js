import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RouterWrapper from '../testHelpers/RouterWrapper';
import AppHeader from '../components/AppHeader';

const stubFunction = () => {};

describe('AppHeader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <RouterWrapper>
        <AppHeader setDrawerOpen={stubFunction} />
      </RouterWrapper>
    );
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });

  describe('navigation', () => {
    beforeEach(() => {
      render(
        <RouterWrapper>
          <AppHeader setDrawerOpen={stubFunction} />
        </RouterWrapper>
      );
    });

    it('displays the path', () => {
      expect(screen.getByText('/Home')).toBeInTheDocument();
    });

    it('changes path when link is clicked', () => {
      userEvent.click(screen.getAllByRole('link', { name: 'ABOUT' })[0]);
      expect(screen.getByText('/About')).toBeInTheDocument();
    });

    it('highlights the active link', () => {
      const node = screen.getAllByRole('link', { name: 'ABOUT' })[0]
      userEvent.click(node);
      expect(node).toHaveClass('active');
    });
  });
});
