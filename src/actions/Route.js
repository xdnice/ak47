const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const getData = (dispatch,count) => {
  let listData = [];
  for (let i = 0; i < count; i++) {
    listData.push({
      src: '',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: `Title Jiang ${i}`,
      description:'Rise n’ shine and don’t forget to smile',
      star: i * 2,
      like: i * 3
    });
  }
  dispatch({
    count,
    listData,
    type:GETDATA,
  });
}

export { getData };
/*export function* getData() {
  try {
    let listData = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      listData.push({
        src: '',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        title: `Title Jiang ${i}`,
        description:'Rise n’ shine and don’t forget to smile',
        star: i * 2,
        like: i * 3
      });
    }
    // let { data } = yield call(request.post, '/login', { user, pass });
    yield put({
      type: GETDATA,
      listData,
      count
    });
  } catch(error) {
    yield put({ type: GETDATA_ERROR, error });
  } 
}*/