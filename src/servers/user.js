import { requestPost } from '../request';

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

export function fetchUpdatePassword(params) {
  return requestPost({
    method: 'updatePassword',
    options: {
      body: {
        params: params.values
      }
    }
  });
}