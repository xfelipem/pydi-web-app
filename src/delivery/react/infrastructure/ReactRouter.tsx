import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LandingPage } from '../pages/landing';
import { Router } from '../../../contracts/infrastructure/Router';

export class ReactRouter implements Router {
  getReactRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' children={<LandingPage />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
