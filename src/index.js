import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import createStore from './createStore';
import { verifyCredentials } from './redux-token-auth-config'

const history = createBrowserHistory();
const store = createStore(history);
verifyCredentials(store)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>

  , document.getElementById('root')
);