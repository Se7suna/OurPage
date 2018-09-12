import axios from 'axios';
export default function ajax(data = {}, url, type) {
  return new Promise(function(resolve, reject) {
    let promise;
    if (type === 'GET') {
      let dataStr = '';
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      });
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
      promise = axios.get(url);
    } else {
      // 设置 content-type 解决 options 问题
      promise = axios({
        method: 'post',
        url: url,
        data: data,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      });
    }
    promise.then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}
