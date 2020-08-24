import { ArticleType } from '../../../../../../../core/models/ArticleType';
import { UrlState } from '../state/UrlState';

export class CreateArticlePresenter {
  constructor(private urlState: UrlState, private action) {}

  get title(): ArticleType['title'] {
    return this.urlState.title;
  }

  setTitle(newTitle: ArticleType['title']): void {
    this.urlState.setTitle(newTitle);
  }
}
