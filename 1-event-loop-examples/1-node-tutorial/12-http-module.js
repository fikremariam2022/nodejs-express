const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to home page");
  if (req.url === "/about") res.end("This is our history");
  //default response
  res.end(`
  <h1>Oops..</h1>
  <p>requested page was not found. <a href="/">Navigate to home</a></p>`);
});
server.listen(5000);
