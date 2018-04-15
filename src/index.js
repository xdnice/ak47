import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
import Layout from './components/Layout/Layout';
import About from './pages/About/index';
import 'babel-polyfill';
import Home from './pages/Home/index';
import Register from './pages/Register/index';
import User from './pages/User/index';
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
const routes = [
  {
    path: "/",
    component: Layout
  },
  {
    path: "/pages/About",
    component: About
  },
  {
    path: "/pages/Home",
    component: Home
  },
  {
    path: "/pages/Register",
    component: Register
  },
];
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {
          routes.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })
        }
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);