'use strict';

var cloudantAuth = {
  url: "lab"
};

// Check if ENV from BLUEMIX exist
if (process.env.VCAP_SERVICES) {
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES || "{}");

  // Get the 1st Cloudant credential
  var cred = vcapServices.cloudantNoSQLDB[0].credentials;

  // cloudantAuth.host = cred.host;
  // cloudantAuth.port = cred.port;

  // Get needed information for PouchDB
  cloudantAuth.user = cred.username;
  cloudantAuth.pass = cred.password;
  cloudantAuth.url = cred.url;

}

// Export keys
exports.cloudantAuth = cloudantAuth;
module.exports = exports;
