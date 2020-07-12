import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import { FC } from 'react';

import { ReactRouter } from '../infrastructure/ReactRouter';

type ReactWebAppProps = { router: ReactRouter };

export const ReactWebApp: FC<ReactWebAppProps> = ({ router }) => (
  <>
    <CssBaseline />
    {router.startListening()}
  </>
);
