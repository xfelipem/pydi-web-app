import { FetchService } from '../core/contracts/FetchService';
import { ArticleType } from '../core/models/ArticleType';

type OnSuccess = (article: ArticleType) => void;

type ExecuteProps = { article: ArticleType; onSuccess: OnSuccess };

export class CreateArticleAction {
  constructor(private fetchService: FetchService) {}

  async execute({ article, onSuccess }: ExecuteProps) {
    await this.fetchService.post({ article });

    onSuccess(article);
  }
}
