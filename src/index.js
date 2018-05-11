import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
import rootSaga from './sagas/sagas';
import reducersa from './reducers/reducersa';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routeConfig } from './router';
import createSagaMiddleware from 'redux-saga';
import { requestPost } from './request';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(history);
const store = createStore (
  combineReducers({
    reducers: reducers,
    // reducersa: reducersa,
    router: routerReducer
  }),
  // applyMiddleware(middleware)
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{height: '100%'}}>
        {routeConfig}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);