const http = require('http');

const hostname = '5.63.152.234';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico'){
    console.log(req.method);
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});