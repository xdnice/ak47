import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';

import { fetchRegister, fetchUpdatePassword, fetchLogin } from '../servers/user';

function* registerUser(action) {
  const data = yield call(fetchRegister, action);
  yield put({
    type: 'REGISTERREDU',
    data,
  });
}

function* updatePassword(action) {
  const data = yield call(fetchUpdatePassword, action);
  yield put({
    type: 'REGISTERREDU',
    data,
  });
}

function* login(action) {
  const data = yield call(fetchLogin, action);
  yield put({
    type: 'REGISTERREDU',
    data,
  }); 
}

function* userSaga() {
  yield takeEvery('REGISTER', registerUser);
  yield takeEvery('UPDATEPASSWORD', updatePassword);
  yield takeEvery('LOGIN', login);
}

export default userSaga;