const http = require('http');

http.createServer((req, res) => {
  console.log('server work');
  res.end('Hello world!');
}).listen(3000);