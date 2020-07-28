const promisify = (fn) => (...args) => {
  console.log(...args);
  return new Promise((resolve, reject) => {
    args.push((err, ...args) => {
      if (err) {
        reject(err);
      } else {
        console.log(...args);
        resolve(...args);
      }
    });
    console.log(...args);
    fn.apply(null, args);
  });
};
(async () => {
  const fs = require("fs");
  const readFile = promisify(fs.readFile);
  const data = await readFile("package.json");
})();

module.exports = promisify;
