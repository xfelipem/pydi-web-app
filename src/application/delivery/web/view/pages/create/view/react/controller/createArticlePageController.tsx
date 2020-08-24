import * as React from 'react';

import { CreateArticleAction } from '../../../../../../../../../actions/CreateArticle';
import { APIFetchService } from '../../../../../../../../infrastructure/APIFetchService';
import { CreateArticlePage } from '../CreateArticlePage';

const fetchService = new APIFetchService();

const createArticleAction = new CreateArticleAction(fetchService);

export const createArticlePageController = () => (
  <CreateArticlePage createArticleAction={createArticleAction} />
);
