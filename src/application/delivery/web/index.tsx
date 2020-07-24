import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from '../../../core/contracts/Application';
import { Router } from '../../../core/contracts/Router';
import { CssBaseline } from '@material-ui/core';

export class ReactApplication implements Application {
  constructor(private router: Router) {}

  run() {
    ReactDOM.render(
      <React.StrictMode>
        <CssBaseline />
        {this.router.getRouter()}
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}
