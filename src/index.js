import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routeConfig } from './router';
const history = createHistory();
const middleware = routerMiddleware(history);
// import { requestPost } from './request';
const store = createStore (
  combineReducers({
    reducers:reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);
/*requestPost({
  method:'user',
  options:{
    body: 'key = 1'
  },
  callback:(data) => {
    console.log(data);
  }
});*/
console.log(history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {routeConfig}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);