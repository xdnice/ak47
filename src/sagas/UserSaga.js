import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchRegister, fetchUpdatePassword } from '../servers/user';

function* registerUser(action) {
  const data = yield call(fetchRegister, action);
  yield put({
    type: "REGISTERUSERRU",
    data,
  });
}

function* updatePassword(action) {
  const data = yield call(fetchUpdatePassword, action);
  yield put({
    type: "REGISTERUSERRU",
    data,
  });
}

function* userSaga() {
  yield takeEvery("REGISTERUSER", registerUser);
  yield takeEvery("UPDATEPASSWORD", updatePassword);
}

export default userSaga;