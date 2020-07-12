import { QueryUseCase } from '../contracts/application/UseCase';
import { ArticleType } from '../contracts/domain/ArticleType';
import { ArticleService } from '../domain/ArticleService';

export class GetLastArticle implements QueryUseCase<ArticleType> {
  constructor(private fetchService: ArticleService = new ArticleService()) {}
  async execute(onFetch: (article: ArticleType) => void) {
    const lastArticle = (await this.fetchService.getArticles())[0];

    onFetch(lastArticle);

    return lastArticle;
  }
}
