import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
import Layout from './components/Layout/Layout';
import About from './Pages/About/index';
import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import User from './Pages/User/index';
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
    path: "/Pages/About",
    component: About
  },
  {
    path: "/Pages/Home",
    component: Home
  },
  {
    path: "/Pages/Register",
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