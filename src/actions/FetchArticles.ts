import { FetchService } from '../core/contracts/FetchService';
import { ArticleType } from '../core/models/ArticleType';

type OnSuccess = (articles: ArticleType[]) => void;

export class FetchArticles {
  constructor(private fetchService: FetchService) {}

  async execute(onSuccess: OnSuccess) {
    const articles = await this.fetchService.getJson<ArticleType[]>();

    onSuccess(articles);
  }
}
