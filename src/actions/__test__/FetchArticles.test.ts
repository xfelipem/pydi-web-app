import { FetchService } from '../../core/contracts/FetchService';
import { ArticleType } from '../../core/models/ArticleType';
import { FetchArticles } from '../FetchArticles';

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

    const fetchService = {
      getJson: jest.fn().mockResolvedValue([firstArticle]),
    } as FetchService;

    const action = new FetchArticles(fetchService);

    let externalState;

    await action.execute((articles: ArticleType[]) => {
      externalState = articles;
    });

    expect(externalState).toContain(firstArticle);
  });
});
