import { UseCase } from '../contracts/application/UseCase';
import { ArticleType } from '../contracts/domain/ArticleType';
import { ArticleService } from '../domain/ArticleService';

export class FetchLastArticle implements UseCase<ArticleType> {
  constructor(private fetchService: ArticleService = new ArticleService()) {}

  async execute(onSuccess: (article: ArticleType) => void) {
    const lastArticle = (await this.fetchService.getArticles())[0];

    onSuccess(lastArticle);
  }
}
