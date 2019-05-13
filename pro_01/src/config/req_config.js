export default function requestConfig() {
    let base_url = '';
    let res_url = '';
    console.log(process.env.NODE_ENV)
        // 生产环境
    if (process.env.NODE_ENV === 'production') {
        if (process.env.VUE_APP_MODE === 'pro') {
            //prod生产环境
            base_url = 'prod'
        } else {
            //test 测试环境
            base_url = 'test'
        }
    } else if (process.env.NODE_ENV === 'development') {
        //dev 开发环境
        console.log('开发环境api接口url')
        base_url = 'http://192.168.108.112:9010';
        res_url = '';
    }

    return {
        base_url,
        res_url
    };
}