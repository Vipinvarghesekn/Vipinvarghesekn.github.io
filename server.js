'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var dt = require('./MyFirstmodule');
var fs = require('fs');
http.createServer(function (req, res) {
    console.log("listening on...");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myStreamReader = fs.createReadStream('test.html','utf8');
    myStreamReader.pipe(res);    
}).listen(port);
