
function start(response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write('Welcome');
  response.end();
}

function time(response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  var time = new Date();
  response.write(time.toString());
  response.end();
}

function greet(response, nameForGreeting) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write('Hello ' + nameForGreeting);
  response.end();
}

function greetName(response, postData) {
  response.write('JSON object :   '+ postData);
  response.end();
}

exports.start = start;
exports.time = time;
exports.greet = greet;
exports.greetName = greetName;
