const fs = require("fs");

// 异步读取文件方式
fs.readFile("./download.js", (err, data) => {
  if (err) throw err;
  console.log("异步读取文件方式1:", data);
});

// 同步读取文件
const data = fs.readFileSync("./download.js");
console.log("同步读取文件:", data);

const fsp = fs.promises;
fsp
  .readFile("./download.js")
  .then((data) => console.log("异步读取文件方式2:", data));

(async () => {
  //   const { promisify } = require("util");
  const promisify = require("../promisify");
  const readFile = promisify(fs.readFile);
  const data = await readFile("./download.js");
  console.log("异步读取文件方式3:", data);
})();
