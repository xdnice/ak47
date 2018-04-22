/**
 * 封装Fetch API
 * @author  Jiang
 */
import { message } from 'antd';
const getApi = process.env.NODE_ENV === 'production' ? 'http://downfuture.com/' : 'http://localhost:8080/';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
function parseJSON(response) {
  return response.json();
}
/**
 * [requestGet get请求]
 * @author  Jiang
 * @param  {[type]} options.method   [方法名]
 * @param  {[type]} options.options  [选项]
 * @param  {[type]} options.callback [回调]
 * @return {[type]}                  [description]
 */
function requestGet({ method, options, callback }) {
  options.mode = "cors";
  return fetch(getApi + method)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      callback(data);
    }).catch((err) => {
      message.error('调用node.js失败,' + JSON.stringify(err) + ',方法名：' + method);
    });
}
/**
 * [requestPost post请求]
 * @author  Jiang
 * @param  {[type]} options.method   [方法名]
 * @param  {[type]} options.options  [选项]
 * @param  {[type]} options.callback [回调]
 * @return {[type]}                  [description]
 */
function requestPost({ method, options, callback }) {
  options.mode = "cors";
  options.method = 'POST';
  options.body = JSON.stringify(options.body);
  fetch(getApi + method, options )
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      callback(data);
    }).catch((err) => {
      message.error('调用node.js失败,' + JSON.stringify(err) + ',方法名：' + method);
    });
}

export { requestGet, requestPost };