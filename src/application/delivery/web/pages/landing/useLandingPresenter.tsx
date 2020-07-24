import { useCallback, useEffect, useMemo, useState } from 'react';

import { FetchArticles } from '../../../../../actions/FetchArticles';
import { ArticleType } from '../../../../../core/models/ArticleType';

export function useLandingPresenter(fetchArticlesAction: FetchArticles) {
  const [mainArticle, setMainArticle] = useState<ArticleType | undefined>();

  const [articles, setArticles] = useState<ArticleType[]>([]);

  const tabButtonItems = [{ label: 'Last Activity' }, { label: 'About the app' }];

  const title = 'PyDI';

  const description = 'A tool to build knowledge in community';

  const shouldDisplay = useMemo(() => !mainArticle && articles.length === 0, [
    mainArticle,
    articles,
  ]);

  const onArticlesFetch = useCallback(
    (articles: ArticleType[]) => {
      const [firstArticle, ...rest] = articles;

      setMainArticle(firstArticle);

      setArticles(rest);
    },
    [setMainArticle, setArticles]
  );

  const fetchArticles = useCallback(() => {
    fetchArticlesAction.execute(onArticlesFetch);
  }, [fetchArticlesAction, onArticlesFetch]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return {
    articles,
    description,
    shouldDisplay,
    mainArticle,
    tabButtonItems,
    title,
  };
}
