"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/user'),
    User = _require.User,
    validate = _require.validate;

var _ = require('lodash');

var bcrypt = require('bcrypt');

var auth = require('../middlewere/auth');

router.get("/me", auth, function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findById(req.user._id).select('-password'));

        case 2:
          user = _context.sent;

          if (user) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(404).send('not found'));

        case 5:
          res.status(200).send(user);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/create', function _callee2(req, res) {
  var _ref, error, user, salt, result;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(validate(req.body));

        case 2:
          _ref = _context2.sent;
          error = _ref.error;

          if (!error) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).send(error.details[0].message));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 8:
          user = _context2.sent;

          if (!user) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(400).send(user.error));

        case 11:
          user = new User(_.pick(req.body, ["name", 'email', 'password', 'isAdmin']));
          _context2.next = 14;
          return regeneratorRuntime.awrap(bcrypt.genSalt());

        case 14:
          salt = _context2.sent;
          _context2.next = 17;
          return regeneratorRuntime.awrap(bcrypt.hash(user.password, salt));

        case 17:
          user.password = _context2.sent;
          _context2.next = 20;
          return regeneratorRuntime.awrap(user.save());

        case 20:
          result = _context2.sent;
          res.status(201).send(_.pick(result, ["name", "email", "password", "isAdmin"]));

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;