export default function files2base64(files) {
  if (getType(files) !== 'FileList' && getType(files) !== 'File') {
    throw new TypeError('args is not file(参数不是文件)');
  }
  const filesRederPromise = Array.from(files).map(file => {
    console.log('getType(files)', getType(files));
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        resolve(e.target.result);
      }
      reader.onerror = e => {
        reject(e);
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
  return Promise.all(filesRederPromise);
};

export function readFile(file) {
  if (getType(file) !== 'FileList' && getType(file) !== 'File') {
    throw new TypeError('args is not file(参数不是文件)');
  }
  if (getType(file) === 'FileList') {
    console.warn('Only one file can be read at a time(一次只能读取一个文件)');
    file = file[0];
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return reader;
}

export function getType (target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}