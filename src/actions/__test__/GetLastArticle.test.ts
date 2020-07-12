import { ArticleType } from '../../contracts/domain/ArticleType';
import { ArticleService } from '../../domain/ArticleService';
import { GetLastArticle } from '../GetLastArticle';

describe('Given a GetLastArticle use case', () => {
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

    const action = new GetLastArticle(articleService);

    let externalState;

    const retrievedArticle = await action.execute((article: ArticleType) => {
      externalState = article;
    });

    expect(retrievedArticle).toBe(lastArticle);
    expect(externalState).toBe(lastArticle);
  });
});
