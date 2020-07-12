import { render, screen } from '@testing-library/react';
import React from 'react';

import { LandingPage } from '..';

describe('Given a LandingPage', () => {
  beforeEach(() => {
    render(<LandingPage />);
  });

  test.skip('when rendered, then should have a title', () => {
    expect(screen.getByText(/FeliDev/i)).toBeTruthy();
  });

  test('when rendered, then should have a last activity tab button', () => {
    expect(screen.getByText(/Last Activity/i)).toBeTruthy();
  });

  test('when rendered, then should have a about the app tab button', () => {
    expect(screen.getByText(/About The App/i)).toBeTruthy();
  });

  test('when rendered, then should display the last article preview', () => {
    expect(screen.getByText(/Last Article/i)).toBeTruthy();
  });

  test('when rendered, then should display the a article preview list', () => {
    expect(screen.getByText(/You may enjoy/i)).toBeTruthy();
  });
});
