//file system use promise.

var fs = require('fs');
var http = require('http');

var readdata = fs.readFileSync('./files/file.txt', 'utf-8');
console.log(readdata);
var server = http.createServer(initial);
server.listen(8080, listenFun);

function listenFun() {
  console.log('server is lestning to port.');
}

function initial(req, res) {
  doSomeWork(res, readdata);
  console.log('request end.');
}

function doSomeWork(res, data) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write(data + '<br>');
  res.write('after read file using promise.'  + '<br>');
  res.end('reached to the end.'  + '<br>');
}
