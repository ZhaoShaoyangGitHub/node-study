const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  //   console.log("this is a request");
  //   response.end("this is a response");
  const { url, method, headers } = request;
  if ((url === "/" || url === "/index") && method === "GET") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        response.writeHead(500, {
          "Content-Type": "text/plain;charset=utf-8",
        });
        response.end("500，服务器错误");
      }
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    });
  } else if (url === "/user" && method === "GET") {
    response.writeHead(200, {
      "Content-Type": "text/json",
    });
    response.end(
      JSON.stringify({
        name: "laowang",
      })
    );
  } else if (method === "GET" && headers.accept.indexOf("image/*") !== -1) {
    fs.createReadStream("." + url).pipe(response);
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain;charset=utf-8");
    response.end("404");
  }
});

server.listen(3000);

//打印原型链
function getPrototype(obj) {
  const protoChai = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChai.push([obj]);
  }
}
