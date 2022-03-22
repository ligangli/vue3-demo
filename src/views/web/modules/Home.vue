<!--
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 15:29:00
-->
<template>
    <div>
        <comTitle :title="'阿萨的教授副教授'" />
        测试 {{count }}
        <img src="@/assets/checked.png" alt="">
        <HelloWorld :title="'123'"  @handBtn="getBtn" />
    </div>
</template>

<script >
import {
    onMounted, computed, reactive, toRefs, getCurrentInstance,
} from 'vue';
import { useStore } from 'vuex';
import { ElNotification } from 'element-plus';
import HelloWorld from '@/views/web/components/HelloWorld.vue';
import { getWeatherInfo } from '@/api/index';
// import ComTitle from '../components/comTitle.vue';

export default {
    name: 'HomeIndex',
    components: {
        HelloWorld,
        // ComTitle,
    },
    async setup() {
        const { proxy } = getCurrentInstance();
        console.log(proxy.$echarts, 'proxy.echarts----');
        const store = useStore();

        const obj = reactive({
            str: '123',
        });

        onMounted(() => {
            store.commit('COUNT', 6);
            store.commit('SELECTPOINTID', '测试监听');
            // proxy.$toast.show({
            //     cancelText: '取消',
            //     confirmText: '确定',
            //     newsTitle: '弹框标题',
            //     onCancel: () => {
            //         console.log('回调取消');
            //     },
            //     onConfirm: () => {
            //         console.log('确定回调');
            //     },
            // });
            proxy.$confirm.show({
                cancelText: '取消',
                confirmText: '确定',
                newsTitle: '弹框标题',
                onCancel: () => {
                    console.log('回调取消');
                },
                onConfirm: () => {
                    console.log('确定回调');
                },
            });
        });
        ElNotification({
            title: 'Info',
            message: 'This is an info message',
            type: 'info',
        });
        const res = await getWeatherInfo();
        console.log(res);
        const count = computed(() => store.state.web.count);
        console.log(count);

        const getBtn = (val) => {
            console.log(val, '------子触发事件点击，父组件接受');
        };
        return {
            ...toRefs(obj),
            count,
            getBtn,
        };
    },
};
</script>
<style lang="scss" >
.map-main>div{
    background-color: #6c738b!important;
}
</style>

<style lang="scss" scoped>

    img {
        width: 200px;
        height: 200px;
    }
    .img{
        width: 200px;
        height: 200px;
        background: url('@/assets/checked.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
