import { call, put } from 'redux-saga/effects';

const registerUser = (dispatch, values) => {
  dispatch({
    type:'REGISTERUSER',
    values
  });
}

const clearUser = (dispatch) => {
  dispatch({
    type:'CLEARUSER'
  });
}

const updatePassword = (dispatch, values) => {
  dispatch({
    type:'UPDATEPASSWORD',
    values
  });
}

export { registerUser, clearUser, updatePassword };