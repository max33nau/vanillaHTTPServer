
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

function greet(response) {
  console.log('greet json object');
}

function greetName(response) {
  console.log('greet persons name');
}

exports.start = start;
exports.time = time;
exports.greet = greet;
exports.greetName = greetName;
