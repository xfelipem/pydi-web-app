import { ArticleType } from '../../domain/model/ArticleType';
import { ArticleService } from '../../domain/model/ArticleService';
import { FetchArticles } from '../FetchArticles';

import { mocked } from 'ts-jest/utils';

describe('Given a FetchArticles use case', () => {
  test(`
    when is invoked with no arguments, then should retrieve a list of articles
  `, async () => {
    const firstArticle = {
      id: 'theId01',
      title: 'Super Article',
      abstract: 'Super Abstract',
      content: 'Super content',
      date: 'Jan 13, 2004',
      sources: ['https://source.unsplash.com/random'],
    };

    const articleService = mocked({} as ArticleService);
    articleService.getArticles = jest.fn().mockResolvedValue([firstArticle]);

    const action = new FetchArticles((articleService as unknown) as ArticleService);

    let externalState;

    await action.execute((articles: ArticleType[]) => {
      externalState = articles;
    });

    expect(externalState).toContain(firstArticle);
  });
});
