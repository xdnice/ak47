import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers';
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
    reducers:reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware),
  applyMiddleware(sagaMiddleware)
);
/*function* aaa() {
  try {
    console.log(444);
    const data = yield call(requestPost({
    method:'user',
    options:{
      body: 'key = 1'
    },
    callback:(data) => {
      console.log(data);
    }
  }), 123);
    console.log(123);
    // yield put({type: "FETCH_SUCCEEDED", data});
  } catch (error) {
    console.log(error);
    // yield put({type: "FETCH_FAILED", error});
  }
}
const a = aaa();
a.next();*/
/*requestPost({
  method:'user',
  options:{
    body: 'key = 1'
  },
  callback:(data) => {
    console.log(data);
  }
});*/
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