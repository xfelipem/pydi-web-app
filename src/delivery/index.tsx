import React from 'react';
import ReactDOM from 'react-dom';

import { WebApp } from './WebApp';


ReactDOM.render(
  <React.StrictMode>
    <WebApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
