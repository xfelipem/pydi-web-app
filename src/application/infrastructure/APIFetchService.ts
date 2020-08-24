import { FetchService } from '../../core/contracts/FetchService';

export class APIFetchService implements FetchService {
  async getJson<T>(): Promise<T> {
    return ([
      {
        id: 'theId01',
        title: 'Super Article',
        abstract: 'Super Abstract',
        content: 'Super content',
        date: 'Jan 13, 2004',
        sources: ['https://source.unsplash.com/random'],
      },
      {
        id: 'theId02',
        title: 'Title 02',
        abstract: 'Abstract 02',
        content: 'Content 02',
        date: 'Jan 15, 2004',
        sources: ['https://source.unsplash.com/random'],
      },
      {
        id: 'theId03',
        title: 'Title 03',
        abstract: 'Abstract 03',
        content: 'Content 03',
        date: 'Mar 17, 2014',
        sources: ['https://source.unsplash.com/random'],
      },
      {
        id: 'theId04',
        title: 'Title 04',
        abstract: 'Abstract 04',
        content: 'Content 04',
        date: 'Dic 13, 2019',
        sources: ['https://source.unsplash.com/random'],
      },
    ] as unknown) as T;
  }

  async post(postProps: any) {
    return;
  }
}
