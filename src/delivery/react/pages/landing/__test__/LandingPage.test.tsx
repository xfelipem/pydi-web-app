import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { LandingPage } from '..';
import { FetchArticles } from '../../../../../actions/FetchArticles';
import { ArticleService } from '../../../../../domain/model/ArticleService';
import { useLandingPresenter } from '../useLandingPresenter';

describe('Given a LandingPage', () => {
  const mockedArticleService = ({
    getArticles: jest.fn().mockResolvedValue([
      {
        id: 'theId01',
        title: 'Sarasa Article',
        abstract: 'Super Abstract',
        content: 'Super content',
        date: 'Jan 13, 2004',
        sources: ['https://source.unsplash.com/random'],
      },
      {
        id: 'theId02',
        title: 'Chajá',
        abstract: 'Abstract',
        content: 'content',
        date: 'Jan 14, 2004',
        sources: ['https://source.unsplash.com/random'],
      },
    ]),
  } as unknown) as ArticleService;

  const fetchArticles = new FetchArticles(mockedArticleService);
  const landingPage = (
    <LandingPage fetchArticles={fetchArticles} usePresenter={useLandingPresenter} />
  );

  afterEach(() => cleanup());

  test('when rendered, then should have a header', async () => {
    act(() => {
      render(landingPage);
    });
    await waitFor(() => expect(screen.getByTitle(/PyDI/i)).toBeTruthy());
  });

  test('when rendered, then should have a main activity preview', async () => {
    act(() => {
      render(landingPage);
    });
    await waitFor(() => expect(screen.getByTitle('Sarasa Article')).toBeTruthy());
  });

  test('when rendered, then should have a list of activity previews', async () => {
    act(() => {
      render(landingPage);
    });
    await waitFor(() => expect(screen.getByTitle('Chajá')).toBeTruthy());
  });
});
