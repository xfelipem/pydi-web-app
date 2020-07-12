import { ArticleService } from '../domain/model/ArticleService';
import { ArticleType } from '../domain/model/ArticleType';

export class FetchLastArticle {
  constructor(private fetchService: ArticleService = new ArticleService()) {}

  async execute(onSuccess: (article: ArticleType) => void) {
    const lastArticle = (await this.fetchService.getArticles())[0];

    onSuccess(lastArticle);
  }
}
