import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { FC } from 'react';

import { ReactRouter } from '../infrastructure/ReactRouter';

describe('Given a ReactRouter', () => {
  const FakeComponent: FC = () => <h1 title='sarasa'>Title</h1>;
  
  test('when routes with path and controller are provided', () => {
    const routes = [{ path: '/', controller: () => <FakeComponent /> }];
    const router = new ReactRouter(routes);

    render(router.getRouter());

    expect(screen.getByTitle('sarasa')).toBeTruthy();
  });
});
