import { Button, Grid, TextField } from '@material-ui/core';
import * as React from 'react';

import { CreateArticleAction } from '../../../../../../../actions/CreateArticle';
import { ArticleLayout } from '../../../layouts/ArticleLayout';

/**
 * Este contrato parece un poco extraño, ¿no?
 * Falta trabajo sobre esta parte, pero la idea es no depender de la
 * implementación de la acción ni del hook, solo depender de las propiedades resultantes
 * escribiendo esto pienso que es mejor pasar esta responsabilidad al controller.
 */
type CreatePageProps = {
  action: CreateArticleAction;
  usePresenter: ({ createArticle }: { createArticle: CreateArticleAction }) => any;
};

export const CreatePage = (props: CreatePageProps) => {
  return (
    <ArticleLayout
      title='PyDI'
      description='A tool to build knowledge in community'
      tabButtonItems={[]}
    >
      <Grid container>
        <Grid item xs={12}>
          <form noValidate autoComplete='off'>
            <TextField id='new-article-title' label='title' />
            <TextField id='new-article-abstract' label='abstract' />
            <TextField id='new-article-content' label='content' />
            <TextField id='new-article-date' label='date' />
            <Button variant='contained'>Create</Button>
          </form>
        </Grid>
      </Grid>
    </ArticleLayout>
  );
};
