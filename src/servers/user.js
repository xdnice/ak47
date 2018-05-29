import { requestPost } from '../request';

export function fetchRegister(params) {
  return requestPost({
    method: 'register',
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

export function fetchLogin(params) {
  return requestPost({
    method: 'login',
    options: {
      body: {
        params: params.values
      }
    }
  });
}