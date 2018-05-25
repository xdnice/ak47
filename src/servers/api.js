import { requestPost } from '../request';

export function fetchData(params) {
  return requestPost({
    method: 'user',
    options: {
      body: {
        count: params.count
      }
    }
  });
}

export function fetchRegister(params) {
  return requestPost({
    method: 'registerUser',
    options: {
      body: {
        params: params.values
      }
    }
  });
}