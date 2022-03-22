/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 15:15:17
 */
import * as types from '../mutations-types';

export default {
    // namespaced:true, // 命名空间
    state() {
        return {
            count: 0,
            selectPointId: '',
        };
    },
    mutations: {
        [types.COUNT](state, payload) {
            state.count = payload;
        },
        [types.SELECTPOINTID](state, payload) {
            state.selectPointId = payload;
        },
    },
};
