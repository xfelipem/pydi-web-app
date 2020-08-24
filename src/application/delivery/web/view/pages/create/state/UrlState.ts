import { ArticleType } from '../../../../../../../core/models/ArticleType';

export class UrlState {
  constructor(private history: any, private params: any) {}

  get title(): ArticleType['title'] {
    return this.params.title;
  }

  setTitle(newTitle: ArticleType['title']) {
    console.log('setTitle', this, newTitle);
    this.history.push(`/create/?title=${newTitle}`);
  }
}
