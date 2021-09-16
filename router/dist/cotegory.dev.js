"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../models/cotegory'),
    validateCotegory1 = _require.validateCotegory1,
    Cotegory = _require.Cotegory;

var auth = require('../middlewere/auth');

router.get('/', function _callee(req, res) {
  var cotegory;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Cotegory.find());

        case 2:
          cotegory = _context.sent;

          if (cotegory) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).send('not found'));

        case 5:
          res.status(200).send(cotegory);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/create', auth, function _callee2(req, res) {
  var _ref, error, cotegory;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(validateCotegory1(req.body));

        case 2:
          _ref = _context2.sent;
          error = _ref.error;

          if (!error) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).send(error));

        case 6:
          cotegory = new Cotegory({
            name: req.body.name
          });
          _context2.next = 9;
          return regeneratorRuntime.awrap(cotegory.save());

        case 9:
          res.send(cotegory);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/:id', function (req, res) {
  var cotegory = Cotegory.findById(req.param.id);
  if (!cotegory) res.status(404).send('not found cotegory');
  res.status(200).send(cotegory);
});
module.exports = router;