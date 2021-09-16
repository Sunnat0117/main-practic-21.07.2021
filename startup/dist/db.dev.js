"use strict";

var mongoose = require("mongoose"); // const winston = require("winston");


var winston = require('winston');

var config = require('config');

module.exports = function () {
  mongoose.connect(config.get('db'), {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(function () {
    winston.debug("mongoose connected");
  });
  mongoose.set('useFindAndModify', true);
};