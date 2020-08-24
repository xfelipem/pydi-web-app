import * as React from 'react';

import { FetchArticles } from '../../../../../../actions/FetchArticles';
import { APIFetchService } from '../../../../../infrastructure/APIFetchService';
import { useLandingPresenter } from './useLandingPresenter';
import { LandingPage } from './view';

const fetchService = new APIFetchService();
const fetchArticlesAction = new FetchArticles(fetchService);

const landingPageController = () => (
  <LandingPage usePresenter={useLandingPresenter} fetchArticles={fetchArticlesAction} />
);

export const landingRoute = { path: '/', controller: landingPageController };
