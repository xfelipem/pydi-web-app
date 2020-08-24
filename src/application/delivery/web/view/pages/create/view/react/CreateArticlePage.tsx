import * as React from 'react';
import { FC } from 'react';

import { CreateArticleAction } from '../../../../../../../../actions/CreateArticle';
import { CreateArticleView } from './CreateArticleView';
import { useCreateArticlePresenter } from './hooks/useCreateArticlePresenter';
import { useUrlState } from './hooks/useUrlState';

type CreateArticlePageProps = { createArticleAction: CreateArticleAction };

export const CreateArticlePage: FC<CreateArticlePageProps> = ({ createArticleAction }) => {
  const urlState = useUrlState();
  const [model, actions] = useCreateArticlePresenter(createArticleAction, urlState);

  return <CreateArticleView model={model} actions={actions} />;
};
