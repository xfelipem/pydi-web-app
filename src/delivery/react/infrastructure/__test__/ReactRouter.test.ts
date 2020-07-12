import { ReactRouter } from '../ReactRouter';
import { render, screen } from '@testing-library/react';

describe('Given a ReactRouter', () => {
  test('when no route is privided, then should display landing page', () => {
    const router = new ReactRouter();

    render(router.getReactRouter());

    expect(screen.getAllByText(/Last Activity/i)).toBeTruthy();
  });
});
