import axios from 'axios';

async function request(options: any) {
    return new Promise((resolve, reject) => {
      const requestSettings = {
        url: options.url,
        method: options.method || 'get',
        baseURL: options.baseURL,
        headers: {
          ...options.headers,
        },
        data: options.data,
        params: options.params,
      };
  
      if (options.debugRequest) {
        console.log(requestSettings);
      }
      axios(requestSettings)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          const responseData = (error.response || {}).data;
          console.error(responseData);
          reject(responseData);
        });
    });
  }
  
  
  async function get(url: string, params = {}, options = {}) {
    return request({
      url,
      method: 'get',
      params,
      ...options,
    });
  }
  
  async function post(url: string, data: any, options: any) {
    return request({
      url,
      method: 'post',
      data,
      ...options,
    });
  }
  
  async function put(url: string, data: any, options: any) {
    return request({
      url,
      method: 'put',
      data,
      ...options,
    });
  }
  
  async function del(url: string, options: any) {
    return request({
      url,
      method: 'delete',
      ...options,
    });
  }

  export default {
    get,
    post,
    put,
    delete: del,
  
    request,
  };
  