'use strict';

var secret = require('./secret');

var PouchDB = require('pouchdb');

var voteDB = (secret.cloudantAuth.url === "lab") ?
  new PouchDB("http://127.0.0.1:5984/vote") : // Local testing
  new PouchDB(secret.cloudantAuth.url + "/vote", {
    auth: {
      username: secret.cloudantAuth.user,
      password: secret.cloudantAuth.pass,
    }
  });

var create = function Create(id) {
  voteDB.put({
    _id: id,
    count : 1,
  }, function(err, response) {
    if (err) {
      return console.log("POST ERR:" + err);
    }
    // console.log(response);
    return;
  });
};

var update = function Update(id) {
  voteDB.get(id, function(err, doc) {
    if (err || (!doc.count)) {
      create(id);
      // return console.log("UP ERR:" + err);
      return;
    }
    voteDB.put({
      count : (doc.count + 1),
    }, doc._id, doc._rev, function(err, response) {
      if (err) {
        return console.log(err);
      }
      // handle response
    });
  });
};

exports.create = create;
exports.update = update;

module.exports = exports;
