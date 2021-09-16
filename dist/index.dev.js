"use strict";

var express = require("express");

var config = require('config');

var winston = require('winston');

var jwt = require('jsonwebtoken');

var app = express();

require('./startup/logging')();

require('./startup/routes')(app);

require('./startup/db')();

require('./startup/config')(); // throw new Error('mol')


var server = app.listen(3000, function () {
  winston.info('server running on 3000 port');
});
winston.info(jwt.sign({
  _id: (void 0)._id,
  isAdmin: (void 0).isAdmin
}, config.get('jwtPriveteKey')));
module.exports = server;