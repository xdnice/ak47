import { requestPost } from '../request';

export function fetchData(params) {
  return requestPost({
    method: 'home',
    options: {
      body: {
        count: params.count
      }
    }
  });
}