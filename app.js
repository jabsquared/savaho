/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var services = JSON.parse(process.env.VCAP_SERVICES || "{}");

var mongo = services.mongolab[0].credentials;

var uri = mongo.uri;

var MongoClient = require('mongodb').MongoClient;

var collection = null;

MongoClient.connect(uri, function(err, db) {
  if (err) {
    return console.dir(err);
  }

  collection = db.collection('vote');
});

app.get('/api/:user', function(req, res) {
  var ho_id = req.param.user;
  collection.insert(ho_id);
  res.send('Cool');
});



// start server on the specified port and binding host
app.listen(appEnv.port, function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
