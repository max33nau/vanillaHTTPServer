"use strict";

function start(response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write('Welcome');
  response.end();
}

function time(response) {
  response.writeHead(200, {"Content-Type":"text/html"});
  var currentTime = new Date();
  response.write('<h1>'+currentTime.toString()+'</h1>');
  response.end();
}

function greet(response, nameForGreeting) {
  if(nameForGreeting) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write('Hello ' + nameForGreeting);
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404 Not Found');
  }
  response.end();
}

function greetName(response, postData) {
  if(postData){
    response.write('JSON object :   '+ postData);
  }  else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404 Not Found');
  }
  response.end();
}

exports.start = start;
exports.time = time;
exports.greet = greet;
exports.greetName = greetName;
