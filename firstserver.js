var http = require('http');

function initial(req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end('hello server working');
}

http.createServer(initial).listen(8080, listenFun);

function listenFun() {
  console.log('server is listening at 8080.');
}
