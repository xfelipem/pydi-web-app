import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import { ArticleLayout } from '../ArticleLayout';

describe('Given a ArticleLayout', () => {
  const articleLayout = (
    <ArticleLayout title='title' description='description' tabButtonItems={[]}>
      <></>
    </ArticleLayout>
  );

  afterEach(() => cleanup());

  test('when rendered, then should have a header', async () => {
    act(() => {
      render(articleLayout);
    });
    await waitFor(() => expect(screen.getByTitle(/title/i)).toBeTruthy());
  });

  test('when rendered, then should have a footer', async () => {
    act(() => {
      render(articleLayout);
    });
    await waitFor(() => expect(screen.getByText(/description/i)).toBeTruthy());
  });
});
