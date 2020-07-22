import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { FC } from 'react';
import { ReactRouter } from '../ReactRouter';

describe('Given a ReactRouter', () => {
  const FakeComponent: FC = () => <h1 title='sarasa'>Title</h1>;
  test('when no route is privided, then should display landing page', () => {
    const routes = [{ path: '/', component: <FakeComponent /> }];
    const router = new ReactRouter(routes);

    render(router.getRouter());

    expect(screen.getByTitle('sarasa')).toBeTruthy();
  });
});
