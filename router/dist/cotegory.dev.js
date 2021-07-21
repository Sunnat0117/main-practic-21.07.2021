"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/cotegory'),
    validates = _require.validates,
    Cotegory = _require.Cotegory;

router.post('/create', function _callee(req, res) {
  var _ref, error, cotegory;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(validates(req.body));

        case 2:
          _ref = _context.sent;
          error = _ref.error;

          if (!error) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).send(error));

        case 6:
          cotegory = new Cotegory({
            name: req.body.name
          });
          _context.next = 9;
          return regeneratorRuntime.awrap(cotegory.save());

        case 9:
          res.send(cotegory);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;