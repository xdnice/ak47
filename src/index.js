import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
import Layout from './components/Layout/Layout';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    reducers:reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Layout} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);