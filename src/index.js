export default function files2base64(files) {
  const filesRederPromise = Array.from(files).map(file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        resolve(e.target.result);
      }
      // todo
      // onabort 中断时触发
      // onerror 出错时触发
      // onload 文件读取成功完成时触发
      // onloadend 读取完成触发，无论成功或失败
      // onloadstart 读取开始时触发
      // onprogress 读取中
    });
  })
  return Promise.all(filesRederPromise)
};