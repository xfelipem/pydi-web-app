import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Router } from '../../../infrastructure/Router';
import { LandingPage } from '../pages/landing';

export class ReactRouter implements Router {
  getRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' children={<LandingPage />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
