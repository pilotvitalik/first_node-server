const http = require('http');

const hostname = '5.63.152.234';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Update NodeJS 12042021');
  console.log(req.url);
  switch(req.url){
    case '/':
      showMain(req, res);
      break;
    case '/test':
      showTest(req, res);
      break;
    default:
      page404(req, res);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log('Server started');
});

function showMain(req, res){
  res.end('This is main page');
}

function showTest(req, res){
  res.end('This is test page');
}

function page404(req, res){
  res.end('404');
}