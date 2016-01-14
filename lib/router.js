"use strict";

function route(handle,pathname, response, nameForGreeting) {
  if(typeof handle[pathname] === 'function') { // If the route exist in handle and is a function then it will run the function
    handle[pathname](response, nameForGreeting);
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404 Not Found');
    response.end();
  }
}

exports.route = route;
