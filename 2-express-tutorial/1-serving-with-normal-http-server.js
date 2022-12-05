const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./2-express-tutorial/home.html");

const server = http.createServer((req, res) => {
  //home page
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  }
  //404
  else {
    res.writeHead(404, '{ "Content-type": "text/html"}');
    res.write("<h1>Page was not found</h1>");
    res.end();
  }
});
server.listen(3000);
