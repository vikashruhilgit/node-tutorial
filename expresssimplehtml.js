const express = require('express');
const path = require('path');
const fs = require('fs');
let app = express();

app.use('/cssfiles', express.static(__dirname + '/assests/css'));

app.listen(8080, function () {
  console.log('server is listening');
});

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '/assests/html') });
});

app.get(/^(\/[a-zA-Z-]+)(\/(.+))*?$/, function (req, res) {
  //console.log(req.params); // important to check.
  //console.log(path.join(__dirname, '/assests/html' + req.params[0] + '.html'));

  try {
    if (fs.statSync(path.join(__dirname, '/assests/html' + req.params[0] + '.html')).isFile()) {
      res.sendFile(req.params[0] + '.html', { root: path.join(__dirname, '/assests/html') });
    }
  }catch (err) {
    res.sendFile('404.html', { root: path.join(__dirname, '/assests/html') });
  }

});

app.get(/^(.*)$/, function (req, res) {
  console.log('not foung trigger.');
  res.sendFile('404.html', { root: path.join(__dirname, '/assests/html') });
});
