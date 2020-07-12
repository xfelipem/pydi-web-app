import { FetchService } from '../../infrastructure/FetchService';
import { ArticleService } from '../ArticleService';

describe('Given a ArticleFetchService', () => {
  test(`
    when getArticles is called with no params, then should retrieve the
    last article created
  `, async () => {
    jest.mock('../../infrastructure/FetchService');

    const lastArticle = {
      id: 'theId01',
      title: 'Super Article',
      abstract: 'Super Abstract',
      content: 'Super content',
      date: 'Jan 13, 2004',
      sources: ['https://source.unsplash.com/random'],
    };

    FetchService.prototype.getJson = jest.fn().mockResolvedValue([lastArticle]);

    const fetchService = new FetchService();

    const articleService = new ArticleService(fetchService);

    const retrievedArticle = (await articleService.getArticles())[0];

    expect(retrievedArticle).toBe(lastArticle);
  });
});
