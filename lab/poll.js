'use strict';

var PouchUtils = require('./pouchutils');

var vote = function Vote (id) {
  PouchUtils.update(id.toString());
};

exports.vote = vote;

module.exports = exports;
