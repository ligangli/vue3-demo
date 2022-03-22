<!--
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-21 11:27:53
-->
<template>
    <div class="header" :style="{width:width+'px'}">
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'comTitle',
    props: {
        title: {
            type: String,
        },
        width: {
            type: Number,
        },
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 538px;
    height: 70px;
    line-height: 70px;
    text-indent: 76px;
    // background: url("@/assets/image/fixed/title_bg.png") no-repeat;
    // background-size: 100% 100%;
    span {
        font-size: 24px;
        font-family: SourceHanSansCN;
        color: #ffffff;
    }
}
</style>
