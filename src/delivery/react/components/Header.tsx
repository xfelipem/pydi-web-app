import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export type ButtonItem = { label: string };

type HeaderProps = { title: string; tabButtons: ButtonItem[] };

export const Header: FC<HeaderProps> = ({ title, tabButtons }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar component='header' className={classes.toolbar}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {tabButtons.map(({ label }) => (
          <Button key={label} role='tab' color='inherit'>
            <Typography>{label}</Typography>
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};
