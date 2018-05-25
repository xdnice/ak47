import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
import rootSaga from './sagas/sagas';
import registerSaga from './sagas/RegisterSaga';
import reducersa from './reducers/reducersa';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { routeConfig } from './router';
import createSagaMiddleware from 'redux-saga';
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
// const middleware = routerMiddleware(history);
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
sagaMiddleware.run(registerSaga);
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