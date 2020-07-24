import { Box, Container, Grid } from '@material-ui/core';
import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../../../core/models/ArticleType';
import { ArticlePreview } from './Article/Preview/Item';
import { ArticlePreviewList } from './Article/Preview/List';
import { Footer } from './layout/Footer';
import { ButtonItem, Header } from './layout/Header';

type LandingPageProps = { usePresenter: any; fetchArticles: any };

export const LandingPage: FC<LandingPageProps> = ({ usePresenter, fetchArticles }) => {
  const { shouldDisplay, articles, description, mainArticle, tabButtonItems, title } = usePresenter(
    fetchArticles
  );

  if (shouldDisplay) return null;

  return (
    <Landing
      articles={articles}
      description={description}
      mainArticle={mainArticle}
      tabButtonItems={tabButtonItems}
      title={title}
    />
  );
};

type AppDescription = string;

type AppTitle = string;

type LandingProps = {
  articles: ArticleType[];
  description: AppDescription;
  mainArticle?: ArticleType;
  tabButtonItems: ButtonItem[];
  title: AppTitle;
};

function Landing({ articles, description, mainArticle, tabButtonItems, title }: LandingProps) {
  if (!mainArticle) return null;
  return (
    <Container>
      <Header title={title} tabButtons={tabButtonItems} />
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <ArticlePreview fullWidth article={mainArticle} />
          </Grid>
          <Grid item xs={12}>
            <Grid container item xs={12} spacing={2}>
              <ArticlePreviewList articles={articles} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer title={title} description={description} />
    </Container>
  );
}
