const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser());
app.use('/cssfile', express.static(__dirname + '/assests/css'));

app.get('/', function (req, res) {
  res.sendFile('postform.html', { root: path.join(__dirname, '/assests/html') });
});

app.post('/', function (req, res) {
  res.send(JSON.stringify(req.body));
});

app.listen(8080, function () {
  console.log('server listening to port: 8080');
});
