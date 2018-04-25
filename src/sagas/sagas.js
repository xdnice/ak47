import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log(3);
  const { count, listData } = action;
  /*try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({type: "GETDATA"});
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }*/
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySagaB() {
  console.log(2);
  yield takeEvery("GETDATA", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/*function* mySaga() {
  console.log(3);
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}*/

export default mySagaB;