import * as React from 'react';
import { FC } from 'react';
import { FetchArticles } from '../../../../actions/FetchArticles';
import { Landing } from './Landing';
import { useLandingPresenter } from './useLandingPresenter';


type LandingPageProps = { usePresenter: any; fetchArticles: any };

export const LandingPageRoute = () => (
  <LandingPage usePresenter={useLandingPresenter} fetchArticles={new FetchArticles()} />
);

export const LandingPage: FC<LandingPageProps> = ({ usePresenter, fetchArticles }) => {
  const { shouldDisplay, articles, description, mainArticle, tabButtonItems, title } = usePresenter(
    fetchArticles
  );

  if (shouldDisplay) return null;

  return (
    <Landing
      articles={articles}
      description={description}
      mainArticle={mainArticle}
      tabButtonItems={tabButtonItems}
      title={title}
    />
  );
};
