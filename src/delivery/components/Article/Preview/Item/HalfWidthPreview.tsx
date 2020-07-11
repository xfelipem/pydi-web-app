import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { FC } from 'react';

import { ArticlePreview } from '.';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export const HalfWidthPreview: FC<ArticlePreview> = ({ article }) => {
  const classes = useStyles();

  const { abstract, date, sources, title } = article;

  const image = sources[0];

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {date}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {abstract}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={image} title={title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
