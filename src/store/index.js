/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 15:15:07
 */
import { createStore, createLogger } from 'vuex';
import web from './modules/web';

const debug = import.meta.env.MODE !== 'production';
const plugins = debug ? [createLogger({})] : [];
export default createStore({
    plugins,
    modules: {
        web,
    },
});
