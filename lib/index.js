var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
// Allows me to add multiple paths quickly and simply using the functions from my requestHandlers module
handle['/'] = requestHandlers.start;
handle['/time'] = requestHandlers.time;
handle['/greet'] = requestHandlers.greet;
handle['/greetpost'] = requestHandlers.greetName;


server.start(router.route, handle, function(){
  console.log('http server connected');
});
