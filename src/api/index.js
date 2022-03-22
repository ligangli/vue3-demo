/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 18:05:33
 */
import request from '@/utils/request';

export function getWeatherInfo() {
    return request({
        url: CONFIG.dix.getWeatherInfo,
        method: 'get',
    });
}
