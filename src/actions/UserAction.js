import { call, put } from 'redux-saga/effects';

const register = (dispatch, values) => {
  dispatch({
    type:'REGISTER',
    values
  });
}

const clear = (dispatch) => {
  dispatch({
    type:'CLEARREDU'
  });
}

const updatePassword = (dispatch, values) => {
  dispatch({
    type:'UPDATEPASSWORD',
    values
  });
}

const login = (dispatch, values) => {
  dispatch({
    type:'LOGIN',
    values
  });
}

export { register, clear, updatePassword, login };