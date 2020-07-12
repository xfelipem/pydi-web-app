import React from 'react';
import ReactDOM from 'react-dom';

import { ReactWebApp } from '../delivery/ReactWebApp';
import { Application } from './Application';
import { Router } from './Router';

export class ReactApplication implements Application {
  constructor(private router: Router) {}

  run() {
    ReactDOM.render(
      <React.StrictMode>
        <ReactWebApp router={this.router} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}
