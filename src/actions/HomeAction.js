const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const getData = (dispatch,count) => {
  dispatch({
    type:'GETDATA_ASYNC',
    count
  });
}

export { getData };