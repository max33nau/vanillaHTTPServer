"use strict";

// Using chai http to test
var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

// My own Modules Needed for when I start my server to pass what routes I have created
var server = require('../lib/server');
var router = require('../lib/router');
var requestHandlers = require('../lib/requestHandlers');
var handle = {};
handle['/'] = requestHandlers.start;
handle['/time'] = requestHandlers.time;
handle['/greet'] = requestHandlers.greet;
handle['/greetpost'] = requestHandlers.greetName;
var port = 3030;

var serverConnected; // created so I can close the server after I run my test so I dont timeout


describe('vanilla http server application', function(){
  before( function(done) {
    serverConnected = server.start(port,router.route, handle, done);
  });

  it('should pass for GET the greet/name of a specified person "/greet/max"', function(done){
    chai.request('localhost:'+port)
      .get('/greet/max')
      .end(function(error,response){ // gets error if there is not a name for there to greet
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        done();
      });
  });

  it('should pass GET for the current time for url "/time"', function(done){
    chai.request('localhost:'+port)
      .get('/time')
      .end(function(error,response){
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        expect(response.headers['content-type']).to.deep.equal('text/html');
        done();
      });
  });

  it('should pass POST for taking a name in JSON format', function(done){
    chai.request('localhost:'+port)
      .post('/greet')
      .field('name','max')
      .end(function(error,response) { // gets error if no field is given
        expect(error).to.be.null;
        expect(response).to.have.status(200);
        done();
      });
  });


  after(function(done){
    server.close(serverConnected, done); // closes the server
  });



})
