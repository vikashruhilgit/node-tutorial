const express = require('express');
let app = express();

app.listen(8080, function () {
  console.log('listening to port.');
});

app.get('/test', function (req, res) {
  res.send('hello express');
});
