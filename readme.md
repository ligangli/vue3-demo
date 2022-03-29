<!--
 * @Description: 目录文档
 * @Author: ligang
 * @Date: 2021-12-09 09:48:46
-->

# 静态文件复制
# 将package.json内build改为vite build && node src/utils/move.js
# move.js改为自己的静态文件目录
```
vue3-demo

├─ .env                                                     
├─ .env.development                                         # 开发环境
├─ .env.production                                          # 生产环境
├─ .eslintignore.js                                         # eslint忽略
├─ .eslintrc.js                                             # eslint
├─ .gitignore                                               # git提交忽略
├─ index.html                                               # git提交忽略
├─ package-lock.json
├─ package.json
├─ readme.md
├─ src
│  ├─ api
│  │  └─ index.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ checked.png
│  │  ├─ loading_moxing_img.png
│  │  └─ logo.png
│  ├─ index.css
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  ├─ index.js
│  │  ├─ modules
│  │  │  └─ web.js
│  │  └─ mutations-types.js
│  ├─ style
│  │  ├─ global.scss
│  │  └─ reset.scss
│  ├─ utils
│  │  ├─ move.js
│  │  └─ request.js
│  └─ views
│     └─ web
│        ├─ components
│        │  └─ HelloWorld.vue
│        └─ modules
│           ├─ Home.vue
│           └─ Map.vue
├─ vite.config.js


```
