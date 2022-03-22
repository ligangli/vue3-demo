/*
 * @Description: 静态文件复制，如果存在加入这个js
 * @Author: ligang
 * @Date: 2021-12-08 15:13:07
 */

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-shadow
const isExist = (path) => { // 判断文件夹是否存在, 不存在创建一个
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
};

isExist('dist/map');
const copyFile = (sourcePath, targetPath) => {
    const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true });

    sourceFile.forEach((file) => {
        const newSourcePath = path.resolve(sourcePath, file.name);
        const newTargetPath = path.resolve(targetPath, file.name);
        if (file.isDirectory()) {
            isExist(newTargetPath);
            copyFile(newSourcePath, newTargetPath);
        }
        if (file.name.endsWith('.json') || file.name.endsWith('.ext') || file.name.endsWith('.txt') || file.name.endsWith('.png') || file.name.endsWith('.jpg') || file.name.endsWith('.jpeg') || file.name.endsWith('.gif') || file.name.endsWith('.css') || file.name.endsWith('.js') || file.name.endsWith('.bin') || file.name.endsWith('.geojson') || file.name.endsWith('.gltf')) { // 需要复制其他的格式的文件修改 .mp4 既可
            fs.copyFileSync(newSourcePath, newTargetPath);
        }
    });
};
console.log('复制');
copyFile('./map', 'dist/map');
