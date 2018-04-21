import React from 'react';
import About from './pages/About/index';
import Home from './pages/Home/index';
import Register from './pages/Register/index';
import User from './pages/User/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/user",
    component: User
  },
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const routeConfig = routes.map((route, i) => {
  return <RouteWithSubRoutes key={i} {...route} />
});
export { routeConfig };