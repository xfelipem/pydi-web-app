import { ArticleType } from '../../contracts/domain/ArticleType';
import { ArticleService } from '../../delivery/react/domain/ArticleService';
import { FetchLastArticle } from '../FetchLastArticle';

describe('Given a FetchLastArticle use case', () => {
  test(`
    when is invoked with no arguments, then should retrieve the last article
    created
  `, async () => {
    jest.mock('../../domain/ArticleService');

    const lastArticle = {
      id: 'theId01',
      title: 'Super Article',
      abstract: 'Super Abstract',
      content: 'Super content',
      date: 'Jan 13, 2004',
      sources: ['https://source.unsplash.com/random'],
    };

    ArticleService.prototype.getArticles = jest.fn().mockResolvedValue([lastArticle]);

    const articleService = new ArticleService();

    const action = new FetchLastArticle(articleService);

    let externalState;

    await action.execute((article: ArticleType) => {
      externalState = article;
    });

    expect(externalState).toBe(lastArticle);
  });
});
