const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const registerUser = (dispatch,values) => {
  console.log(dispatch, values);
  dispatch({
    type:'REGISTERUSER',
    values
  });
}

export { registerUser };