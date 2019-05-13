/**
 * ajax请求封装(基于axios)
 * @dev 何鑫适
 * @email mnkv@163.com
 */
import axios from 'axios'
import requestConfig from '@/config/req_config'

// ajax请求根路径
axios.defaults.baseURL = requestConfig().base_url;

// 超时时间
axios.defaults.timeout = 5000;

// 请求发送之前的配置
axios.interceptors.request.use(config => {

    // 配置token
    let token = localStorage.getItem('token');
    if (token) {
        config.headers['token'] = '';
    }

    // 配置headers
    config.headers['Accept'] = 'application/json'; //发送端需要返回的数据类型
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'; //发送端发送的数据类型

    // 处理返回状态
    config.validateStatus = () => {
        return true;
    };

    console.log(config)
    return config;
}, error => {
    // 请求出错
    console.log(error)
    alert('请求出错')
})

// 服务端返回之后处理
axios.interceptors.response.use(res => {
    console.log(res)
    if (res.status == 200) {
        return res.data;
    } else {
        switch (res.status) {
            case 500:
                alert('服务器500出错')
                break;
            case 404:
                alert('服务器404接口不存在')
                break
        }
    }
}, error => {
    // 响应出错
    console.log(error)
    alert('响应出错')
})

export default axios;