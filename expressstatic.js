const express = require('express');
let app = express();

app.use('/cssFiles', express.static(__dirname + '/assests/css'));

app.listen(8080, function () {
  console.log('listening to port.');
});

app.get('/', function (req, res) {
  res.send('hello express');
});
