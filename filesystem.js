//file system use promise.

var fs = require('fs');
var http = require('http');

var readdata = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile('./files/file.txt', 'utf-8', function (error, data) {
      if (error) {
        reject(error);
      }

      if (data) {
        resolve(data);
      }
    });
  });
};

var server = http.createServer(initial);

server.listen(8080, listenFun);

function listenFun() {
  console.log('server is lestning to port.');
}

function initial(req, res) {
  readdata().then(function (data) {
    doSomeWork(res, data);
    console.log('request end.');
  }).catch(function (error) {
    console.log(error);
  });
}

function doSomeWork(res, data) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write(data + '<br>');
  res.write('after read file using promise.'  + '<br>');
  res.end('reached to the end.'  + '<br>');
}
