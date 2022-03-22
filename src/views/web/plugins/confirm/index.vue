<template>
    <div class="confirm" v-show="showValue">
        <div class="confirm-mask"></div>
        <div class="confirm-wrap">
            <div class="confirm-content">
                <div class="close">
                    <i @click="btnClose"></i>
                </div>
                <p>{{ newsTitle }}</p>
                <div class="btns">
                    <div class="confirm-sure-button" @click="onConfirmAction">{{confirmText}}</div>
                    <div class="confirm-cancel-button" @click="onCancelAction">{{cancelText}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {
    ref, defineProps, getCurrentInstance,
} from 'vue';

export default {
    // props: {
    //     cancelText: {
    //         type: String,
    //         default: '取消',
    //     },
    //     confirmText: {
    //         type: String,
    //         default: '确认',
    //     },
    //     newsTitle: {
    //         type: String,
    //         default: '',
    //     },
    // },
    setup(props, context) {
        const { proxy } = getCurrentInstance();
        // confirm内js可以取到全局$echarts方法
        console.log(proxy, 'proxy.echarts-----------');
        const showValue = ref(false);
        // 可以不写
        defineProps({
            // cancelText: {
            //     type: String,
            //     default: '取消',
            // },
            // confirmText: {
            //     type: String,
            //     default: '确认',
            // },
            // newsTitle: {
            //     type: String,
            //     default: '',
            // },
            // onCancel: {
            //     type: Function,
            //     default: null,
            // },
            // onConfirm: {
            //     type: Function,
            //     default: null,
            // },
        });
        const btnClose = () => {
            showValue.value = false;
        };
        const onCancelAction = () => {
            showValue.value = false;
            if (context.attrs.onCancel) {
                context.attrs.onCancel();
            }
        };
        const onConfirmAction = () => {
            console.log('确定');
            showValue.value = false;
            if (context.attrs.onConfirm) {
                context.attrs.onConfirm();
            }
        };
        return {
            showValue,
            btnClose,
            onCancelAction,
            onConfirmAction,
        };
    },
};
</script>

<style lang="scss" scoped>
.confirm {
    .confirm-mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.2);
        height: 100%;
        z-index: 1000;
    }
    .confirm-wrap {
        position: fixed;
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1002;
        -webkit-overflow-scrolling: touch;
        outline: 0;
    }
    .confirm-content {
        width: 487px;
        height:229px;
        // background: url('~@assetsweb/common/bg.png') no-repeat;
        // background-size: 100% 100%;
        background: green;
        position: relative;
        margin: 0 auto;
        top: 30%;
        p {
            font-size: 24px;
            font-family: SourceHanSansCN,serif;
            font-weight: 400;
            color: #FFFFFF;
            margin-top: 32px;
            margin-bottom: 47px;
            text-align: center;
        }
    }
    .close {
        padding: 19px 18px 0 0;
        display: flex;
        justify-content: flex-end;
         i {
            width: 26px;
            height: 25px;
            // background: url('~@assetsweb/common/close.png') no-repeat;
            // background-size: 100% 100%;
            cursor: pointer;
        }
    }
    .btns {
        display: flex;
        justify-content: center;
        div {
            width: 97px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .confirm-sure-button {
            font-size: 16px;
            font-family: SourceHanSansCN,serif;
            font-weight: 400;
            color: #FFFFFF;
            background: #000;
        }
        .confirm-cancel-button {
            background: #000;
            font-size: 16px;
            font-family: SourceHanSansCN,serif;
            font-weight: 400;
            color:#fff;
        }
    }
}

</style>
