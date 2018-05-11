import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchData } from '../servers/api';

function* fetchUser(action) {
  const data = yield call(fetchData, action);
  yield put({
    type: "GETDATA",
    count: data.count,
    listData: data.listData,
  });
}

function* rootSaga() {
  yield takeEvery("GETDATA_ASYNC", fetchUser);
}

export default rootSaga;