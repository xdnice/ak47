import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchData } from '../servers/api';

function* fetchDataFun(action) {
  const data = yield call(fetchData, action);
  yield put({
    type: "GETDATA",
    count: data.count,
    listData: data.listData,
  });
}

function* homeSaga() {
  yield takeEvery("GETDATA_ASYNC", fetchDataFun);
}

export default homeSaga;