## 说明
把 `file` 对象转换为 `base64`，可支持多个文件同时转。
## 注意点
对于不支持 `Promise` 语法环境，需要自己 `Ployfill`。
## 使用
```
// 安装
npm install files2base64
import files2base64 from 'files2base64';
files2base64([file1, file2])
  .then(res => {
    console.log(res); // [base64(file1), base64(file2)]
  })
```
## 开源协议
MIT