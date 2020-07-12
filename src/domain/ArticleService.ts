import { ArticleType } from '../contracts/domain/ArticleType';
import { FetchService } from '../infrastructure/FetchService';

export class ArticleService {
  constructor(private fetchService: FetchService = new FetchService()) {}

  async getArticles(offset = 0, limit = 1) {
    const articles = await this.fetchService.getJson<ArticleType[]>();
    return articles;
  }
}
