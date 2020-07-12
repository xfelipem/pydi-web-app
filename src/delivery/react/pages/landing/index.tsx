import * as React from 'react';
import { FC, useEffect, useMemo, useState } from 'react';

import { FetchLastArticle } from '../../../../actions/FetchLastArticle';
import { ArticleType } from '../../../../contracts/domain/ArticleType';
import { Landing } from './Landing';

export const LandingPage: FC = () => {
  const {
    isLoading,
    articles,
    description,
    lastArticle,
    tabButtonItems,
    title,
  } = useLandingPresenter();

  if (isLoading) return null;

  return (
    <Landing
      articles={articles}
      description={description}
      lastArticle={lastArticle}
      tabButtonItems={tabButtonItems}
      title={title}
    />
  );
};

function useLandingPresenter() {
  const [lastArticle, setLastArticle] = useState<ArticleType | undefined>();
  const articles = [
    {
      id: 'theId02',
      title: 'Title 02',
      abstract: 'Abstract 02',
      content: 'Content 02',
      date: 'Jan 15, 2004',
      sources: ['https://source.unsplash.com/random'],
    },
    {
      id: 'theId03',
      title: 'Title 03',
      abstract: 'Abstract 03',
      content: 'Content 03',
      date: 'Mar 17, 2014',
      sources: ['https://source.unsplash.com/random'],
    },
    {
      id: 'theId04',
      title: 'Title 04',
      abstract: 'Abstract 04',
      content: 'Content 04',
      date: 'Dic 13, 2019',
      sources: ['https://source.unsplash.com/random'],
    },
  ];

  const tabButtonItems = [{ label: 'Last Activity' }, { label: 'About the app' }];

  const title = 'PyDI';

  const description = 'A tool to build knowledge in community';

  const isLoading = useMemo(() => !lastArticle && articles.length === 0, [lastArticle, articles]);

  useEffect(() => {
    const getLastArticle = new FetchLastArticle();
    getLastArticle.execute(setLastArticle as (article: ArticleType) => void);
  }, []);

  return { articles, description, isLoading, lastArticle, tabButtonItems, title };
}
