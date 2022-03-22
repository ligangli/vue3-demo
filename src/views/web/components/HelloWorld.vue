<!--
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 14:37:42
-->
<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>通过props传的值------ {{title}}</h2>
        <button @click="num++">num is: {{ num }}</button>
        <button @click="emitBtn">测试点击事件</button>
        <button @click="testBtn">子触发事件</button>
        <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
        <img src="@/assets/loading_moxing_img.png" alt="">

    </div>
</template>

<script setup>
import {
    ref, watch, computed,
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const msg = ref('测试');
const num = ref(0);

// 定义事件
// eslint-disable-next-line no-undef
const emit = defineEmits(['handBtn']);
// props传值
// eslint-disable-next-line no-undef
defineProps({
    title: {
        type: String,
        default: '测试',
    },
});

const emitBtn = () => {
    emit('handBtn', '给父组件传值');
};

const count = computed(() => store.state.web.count);
const selectPointId = computed(() => store.state.web.selectPointId);

// 计算多个属性，可以通过返回一个对象的方式来实现
const obj = computed(() => ({
    count: store.state.web.count,
    selectPointId: store.state.web.selectPointId,
}));
console.log('obj---', obj.value.count);
// 单个值监听
// watch(count, (newVal, oldVal) => {
//     console.log(`newVal:${newVal}`, `oldVal:${oldVal}`);
// });
// 监听对象中的某个属性使用箭头函数指向对象中的属性()=>obj.a
// 方法一 ---多个值监听
// watch([count, selectPointId], ([newCount, newPointId], [oldCount, oldPointId]) => {
//     console.log(`newCount:${newCount}`, `oldCount:${oldCount}`);
//     console.log(`newPointId:${newPointId}`, `oldCount:${oldPointId}`);
// });

// 方法二 ---多个值监听 （此处newVal和oldVal是数组）
watch([count, selectPointId], (newVal, oldVal) => {
    console.log(`newVal:${newVal}`, '---');
    console.log(`oldVal:${oldVal}`, '00000');
});
// 深度监听
// watch([count, selectPointId], (newVal, oldVal) => {
//     console.log(`newVal:${newVal}`, '---');
//     console.log(`oldVal:${oldVal}`, '00000');
// },{
//     deep:true
// });
</script>
