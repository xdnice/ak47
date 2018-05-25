const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const registerUser = (dispatch,values) => {
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

export { registerUser, clearUser };