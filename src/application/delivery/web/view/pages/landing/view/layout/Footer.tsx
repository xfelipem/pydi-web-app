import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { FC } from 'react';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        PyDI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

type FooterProps = { description: string; title: string };

export const Footer: FC<FooterProps> = ({ description, title }) => (
  <footer className={useStyles().footer}>
    <Container maxWidth='lg'>
      <Typography variant='h6' align='center' gutterBottom>
        {title}
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
        {description}
      </Typography>
      <Copyright />
    </Container>
  </footer>
);
