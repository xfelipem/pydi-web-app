import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Router } from '../../../core/contracts/Router';
import { landingRoute } from './pages/landing/route';

export class ReactRouter implements Router {
  constructor(private routes: { path: string; controller: any }[] = [landingRoute]) {}
  getRouter() {
    return (
      <BrowserRouter>
        <Switch>
          {this.routes.map(({ path, controller }, index: number) => (
            <Route key={index} exact path={path} render={controller} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}
