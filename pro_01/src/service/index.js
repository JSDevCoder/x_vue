/**
 * demo模块业务逻辑处理
 * @dev 何鑫适
 * @email mnkv@163.com
 */
import ajax from '../request/ajax'

export default {
    apis: {
        DEMO_API: '/menu/appQryMenuOperation',
    },

    async demo(userId) {
        return await ajax.post(this.apis.DEMO_API, {
            userId
        });
    }
}