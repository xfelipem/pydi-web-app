import { ArticleService } from '../domain/model/ArticleService';
import { ArticleType } from '../domain/model/ArticleType';

export type OnSuccess = (articles: ArticleType[]) => void;

export class FetchArticles {
  constructor(private fetchService: ArticleService = new ArticleService()) {}

  async execute(onSuccess: OnSuccess) {
    const articles = await this.fetchService.getArticles();

    onSuccess(articles);
  }
}
