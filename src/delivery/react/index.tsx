import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import { FC } from 'react';

import { Router } from '../../contracts/infrastructure/Router';

type ReactWebAppProps = { router: Router };

export const ReactWebApp: FC<ReactWebAppProps> = ({ router }) => (
  <>
    <CssBaseline />
    {router.getRouter()}
  </>
);
