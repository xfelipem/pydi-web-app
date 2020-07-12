import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LandingPage } from '../delivery/pages/landing';
import { Router } from './Router';

export class ReactRouter implements Router {
  startListening() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' children={<LandingPage />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
