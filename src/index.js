import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';
import Store from './reducers';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
