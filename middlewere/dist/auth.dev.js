"use strict";

var jwt = require('jsonwebtoken');

var config = require('config');

module.exports = function auth(req, res, next) {
  var token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('token kiritilmagan');
  }

  try {
    var decoder = jwt.verify(token, config.get('jwtPriveteKey'));
    req.user = decoder;
    next();
  } catch (error) {
    return res.status(400).send('token notogri');
  }
};