"use strict";

var express = require('express');

var router = express.Router();

var bcrypt = require('bcrypt');

var Joi = require('joi');

var _require = require('../models/user'),
    User = _require.User;

router.post('/', function _callee(req, res) {
  var _ref, error, user, isValidatePwd, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(validate(req.body));

        case 2:
          _ref = _context.sent;
          error = _ref.error;

          if (!error) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(404).send('not found password or email'));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 8:
          user = _context.sent;

          if (user) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(404).send('not found password or email'));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 13:
          isValidatePwd = _context.sent;

          if (isValidatePwd) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(404).send('not found password or email'));

        case 16:
          token = user.generateAuthToken();
          res.header('x-auth-token', token).send(true);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
});

function validate(req) {
  var schema = Joi.object({
    email: Joi.string().required().min(8).max(27),
    password: Joi.string().required().min(8).max(27)
  });
  return schema.validate(req);
}

module.exports = router;