const http = require('http');
const url = require('url');

const hostname = '5.63.152.234';
const port = 3000;

const server = http.createServer((req, res) => {
  const reqURL = url.parse(req.url, true)
  if (req.url !== '/favicon.ico'){
    console.log(reqURL.query);
    console.log(reqURL.query.ghjgj)
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});