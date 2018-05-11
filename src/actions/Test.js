const TEST = 'Test';
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
    type:TEST,
  });
}

export { getData };