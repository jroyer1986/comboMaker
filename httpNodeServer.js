var express = require('express');

const PORT=8080;

var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(PORT, function() { console.log('listening') });