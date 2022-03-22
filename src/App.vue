<!--
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 14:37:42
-->
<template>
    <div id="app">
        <Suspense>
            <router-view/>
        </Suspense>
    </div>
</template>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
  #app{
    width: 100%;
    height: 100%;
  }
}
</style>
