import 'babel-polyfill'; // allows async methods to run without error
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers';
import Routes from './Routes';

const store = createStore(
  reducers,
  {}, // empty state
  applyMiddleware(thunk), // middleware for async operations
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#__SSRRoot')
);
