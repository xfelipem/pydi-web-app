import { Box, Container, Grid } from '@material-ui/core';
import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../domain/model/ArticleType';
import { ArticlePreview } from '../../components/Article/Preview/Item';
import { ArticlePreviewList } from '../../components/Article/Preview/List';
import { Footer } from '../../components/Footer';
import { ButtonItem, Header } from '../../components/Header';

type AppDescription = string;

type AppTitle = string;

type LandingProps = {
  articles: ArticleType[];
  description: AppDescription;
  lastArticle?: ArticleType;
  tabButtonItems: ButtonItem[];
  title: AppTitle;
};

export const Landing: FC<LandingProps> = ({
  articles,
  description,
  lastArticle,
  tabButtonItems,
  title,
}) => {
  if (!lastArticle) return null;
  return (
    <Container>
      <Header title={title} tabButtons={tabButtonItems} />
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <title>Last Article</title>
            <ArticlePreview fullWidth article={lastArticle} />
          </Grid>
          <Grid item xs={12}>
            <title>You may enjoy</title>
            <Grid container xs={12} spacing={2}>
              <ArticlePreviewList articles={articles} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer title={title} description={description} />
    </Container>
  );
};
