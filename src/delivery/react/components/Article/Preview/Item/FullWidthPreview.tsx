import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { FC } from 'react';

import { ArticlePreview } from '.';

const useStyles = makeStyles((theme: Theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export const FullWidthPreview: FC<ArticlePreview> = ({ article }) => {
  const classes = useStyles();

  const { id, title, abstract, sources } = article;

  const image = sources[0];

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
      {<img style={{ display: 'none' }} src={image} alt={title} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component='h1' variant='h3' color='inherit' gutterBottom title={title}>
              {title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {abstract}
            </Typography>
            <Link variant='subtitle1' href={`/article/${id}`}>
              Read
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
