const fs = require("fs");

const rs = fs.createReadStream("./img.png");
const ws = fs.createWriteStream("./clone-img.png"); //莫须有的空间

rs.pipe(ws);
