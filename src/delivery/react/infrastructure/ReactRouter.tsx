import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Router } from '../../../infrastructure/Router';
import { landingPageController } from '../pages/landing';

export class ReactRouter implements Router {
  constructor(
    private routes: { path: string; controller: any }[] = [
      { path: '/', controller: landingPageController },
    ]
  ) {}
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
