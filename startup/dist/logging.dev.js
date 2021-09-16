"use strict";

require('express-async-errors'); // const { transports } = require('winston');


var winston = require('winston');

require('winston-mongodb');

module.exports = function () {
  winston.add(new winston.transports.Console());
  winston.add(new winston.transports.File({
    filename: 'practic_file.log'
  }));
  winston.add(new winston.transports.MongoDB({
    db: 'mongodb://localhost/videoDarslik-logFile'
  }, level = 'info'));
  winston.exceptions.handle(new winston.transports.File({
    filename: 'practic_file.log'
  }));
  process.on('unhandledRejection', function (ex) {
    throw ex;
  });
};