var express = require('express');
var app = express();

function startserver() {
  function server(rep, res) {
    res.send('Hello World');
  }

  app.get('/', server);
  app.listen(9999);
  console.log('Serve is running at localhost:9999 !');
}
