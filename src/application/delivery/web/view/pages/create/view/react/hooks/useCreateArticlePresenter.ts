import { useCallback, useMemo } from 'react';

import { CreateArticleAction } from '../../../../../../../../../actions/CreateArticle';
import { CreateArticlePresenter } from '../../../presenter/CreateArticlePresenter';
import { UrlState } from '../../../state/UrlState';

export function useCreateArticlePresenter(
  createArticleAction: CreateArticleAction,
  urlState: UrlState
) {
  const presenter = useMemo(() => new CreateArticlePresenter(urlState, createArticleAction), [
    urlState,
    createArticleAction,
  ]);

  const title = useMemo(() => presenter.title, [presenter.title]);

  const onTitleChange = useCallback(presenter.setTitle, [presenter.setTitle]);

  const createArticle = useCallback(() => presenter.createArticle, [presenter.createArticle]);

  return useMemo(() => [{ title }, { onTitleChange, createArticle }], [
    title,
    onTitleChange,
    createArticle,
  ]);
}
