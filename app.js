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

app.get('/vote/:hoid', function(req, res) {
  var hoid = req.params.hoid;
  // console.log(ho_id);
  // res.send(ho_id);

  res.send("Done!");
});

// start server on the specified port and binding host
app.listen(appEnv.port, function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
