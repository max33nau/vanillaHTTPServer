var http = require('http');
var url = require('url');


function start(route,handle, callback) {
  function requestMade(request,response) {
    var pathname = url.parse(request.url).pathname;
    route(handle,pathname, response); // Passes the pathname and the object handle with all the request and repsonse functions there based on the path
  }
  var server = http.createServer(requestMade).listen(3030, callback);
}

exports.start = start;
