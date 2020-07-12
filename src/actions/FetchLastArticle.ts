import { UseCase } from '../contracts/application/UseCase';
import { ArticleType } from '../contracts/domain/ArticleType';
import { ArticleService } from '../delivery/react/domain/ArticleService';

export class FetchLastArticle implements UseCase<ArticleType> {
  constructor(private fetchService: ArticleService = new ArticleService()) {}

  async execute(onFetch: (article: ArticleType) => void) {
    const lastArticle = (await this.fetchService.getArticles())[0];

    onFetch(lastArticle);
  }
}
