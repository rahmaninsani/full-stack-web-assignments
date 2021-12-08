const http = require("http");
const url = require("url");

const PORT = 8000;

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  let message = "";

  switch (parsedURL.path) {
    case "/about": {
      message = "Welcome to about us page";
      break;
    }
    case "/contact": {
      message = "Welcome to contact us page";
      break;
    }
    default:
      message = "Hello World!";
  }

  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write(message);
  res.end();
});

server.on("listening", () => {
  console.log(`Server is listening on port ${PORT}`);
});

server.on("close", () => {
  console.log("Server is closed");
});

server.listen(PORT);
