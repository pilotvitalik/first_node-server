const http = require('http');

const hostname = '5.63.152.234';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Update NodeJS 12042021');
});

server.listen(port, hostname, () => {
  console.log('Server started');
});