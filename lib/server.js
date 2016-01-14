"use strict";

var http = require('http');
var url = require('url');


function start(port,route,handle, callback) {
  function requestMade(request,response) {
    var pathname = url.parse(request.url).pathname;
    var postData = '';
    if (pathname[0] === '/'  ) {
       pathname = pathname.slice(1);
     }
    var pathArray = pathname.split('/');
    pathname = '/' + pathArray[0];
    var nameForGreeting = pathArray[1];

    // IF TRYING TO POST USE THE x-www-for-urlencoded when sending the post on POSTMAN
    if(request.method === 'POST') {
        request.addListener('data', function(data) {
          postData += data;
        });
        var postPath = pathname + 'post';
        request.addListener('end', function() {
          route(handle,postPath, response, postData);
        });
      }
    else {
      route(handle,pathname, response, nameForGreeting);
    } // Passes the pathname and the object handle with all the request and repsonse functions there based on the path
  }

  var server = http.createServer(requestMade).listen(port, callback);

  return server;
}

// Allows me to close the server when I call it
function close(server, callback) {
  server.close(callback);
}

exports.start = start;
exports.close = close;
