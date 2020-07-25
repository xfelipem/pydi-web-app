import * as React from 'react';

import { CreateArticleAction } from '../../../../../../actions/CreateArticle';
import { APIFetchService } from '../../../../../infrastructure/APIFetchService';
import { useCreatePresenter } from './presenter/useCreatePresenter';
import { CreatePage } from './view/CreatePage';

const fetchService = new APIFetchService();
const createArticleAction = new CreateArticleAction(fetchService);

const createPageController = () => (
  <CreatePage usePresenter={useCreatePresenter} action={createArticleAction} />
);

export const createRoute = { path: '/create', controller: createPageController };
