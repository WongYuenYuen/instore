// import $ajax from '../zepto/ajax.js';

import Common from './common.js';


let _baseRequest = {
  url: '//live.instore.com.cn/live/',
  type: 'GET',
  cache: true,
  timeout: 10000
}

function _ajaxGet(request, hasDateHeader) {
  let param;
  if (!/^\/assets\//.test(request.url) && !/^\/\//.test(request.url)) {
    request.url = _baseRequest.url + request.url;
  }
  if (hasDateHeader) {
    let heandersdata = { "Cookie": "rm.session.id=" + Common.getcookie("token") };
    request.headers = {
      'Authorization': heandersdata
    }
  }

  param = Object.assign({}, _baseRequest, request);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: param.url,
      type: 'GET',
      dataType: 'json',
      data: param.data,
      success: function(data) {
        if (+data.code == 0) {
          resolve(data);
        } else {
          reject(data)
        }
      },
      error: function(xhr, type) {
        reject(xhr)
      }
    })  });

}


export { _ajaxGet };
export default _ajaxGet;
