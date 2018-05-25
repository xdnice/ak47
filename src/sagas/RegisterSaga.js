import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchRegister } from '../servers/api';

function* registerUser(action) {
  const data = yield call(fetchRegister, action);
  /*yield put({
    type: "GETDATA",
    count: data.count,
    listData: data.listData,
  });*/
}

function* registerSaga() {
  yield takeEvery("REGISTERUSER", registerUser);
}

export default registerSaga;