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
  mainArticle?: ArticleType;
  tabButtonItems: ButtonItem[];
  title: AppTitle;
};

export const Landing: FC<LandingProps> = ({
  articles,
  description,
  mainArticle,
  tabButtonItems,
  title,
}) => {
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
};
