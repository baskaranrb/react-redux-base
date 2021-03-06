import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import saga from 'redux-saga'

import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import Routes from './routes'
const store = createStore(
  reducers, 
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
