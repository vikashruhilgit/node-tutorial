const express = require('express');
const path = require('path');
let app = express();

app.use('/cssfile', express.static(__dirname + '/assests/css'));

app.get('/', function (req, res) {
  res.send('hello' + ' ' + req.query.firstname);

  //res.send(JSON.stringify(req.query.q));
});

app.listen(8080, function () {
  console.log('server listening to port: 8080');
});
