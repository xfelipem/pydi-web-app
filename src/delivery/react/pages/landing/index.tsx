import { Grid } from '@material-ui/core';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';

import { GetLastArticle } from '../../../../actions/GetLastArticle';
import { ArticlePreview } from '../../components/Article/Preview/Item';
import { ArticlePreviewList } from '../../components/Article/Preview/List';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const tabButtonItems = [{ label: 'Last Activity' }, { label: 'About Me' }];

const articles = [
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
];

export const LandingPage: FC = () => {
  const [mainArticle, setMainArticle] = useState();

  useEffect(() => {
    const getLastArticle = new GetLastArticle();
    getLastArticle.execute(setMainArticle as (article: any) => void);
  }, []);

  return (
    <>
      <Header title='FeliDev' tabButtons={tabButtonItems} />
      <Grid container>
        <Grid item xs={12}>
          <title>Last Article</title>
          <ArticlePreview fullWidth article={mainArticle} />
        </Grid>
        <Grid item xs={12}>
          <title>You may enjoy</title>
          <ArticlePreviewList articles={articles} />
        </Grid>
      </Grid>
      <Footer title='FeliDev' description='A personal web made with love' />
    </>
  );
};
