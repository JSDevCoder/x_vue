import axios from 'axios'

let url = '';
if (process.env.NODE_ENV === 'production') {
    if (process.env.VUE_APP_FLAG === 'pro') {
        //prod生产环境
        console.log('设置生产环境api接口url')
        url = 'prod'
    } else {
        //test 测试环境
        console.log('测试环境api接口url')
        url = 'test'
    }
} else {
    //dev 开发环境
    console.log('开发环境api接口url')
    url = 'dev'
}
axios.defaults.baseURL = url;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;