import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Router } from '../../../infrastructure/Router';
import { LandingPageRoute } from '../pages/landing';

export class ReactRouter implements Router {
  constructor(
    private routes: { path: string; component: any }[] = [
      { path: '/', component: <LandingPageRoute /> },
    ]
  ) {}
  getRouter() {
    return (
      <BrowserRouter>
        <Switch>
          {this.routes.map(({ path, component }, index: number) => (
            <Route key={index} exact path={path} children={component} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}
