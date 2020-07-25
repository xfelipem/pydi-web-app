import { Box, Container } from '@material-ui/core';
import * as React from 'react';
import { FC } from 'react';

import { ArticleType } from '../../../../../core/models/ArticleType';
import { Footer } from '../pages/landing/view/layout/Footer';
import { Header } from '../pages/landing/view/layout/Header';

type ArticleLayoutProps = {
  children: any;
  description: ArticleType['abstract'];
  tabButtonItems: any;
  title: ArticleType['title'];
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  children,
  description,
  tabButtonItems,
  title,
}) => {
  return (
    <Container>
      <Header title={title} tabButtons={tabButtonItems} />
      <Box>{children}</Box>
      <Footer title={title} description={description} />
    </Container>
  );
};
