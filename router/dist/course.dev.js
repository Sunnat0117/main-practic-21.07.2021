"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var mongoose = require('mongoose');

var _require = require('../models/courses'),
    Course = _require.Course,
    validate = _require.validate;

var _require2 = require('../models/cotegory'),
    Cotegory = _require2.Cotegory;

var express = require('express');

var router = express.Router();

var auth = require('../middlewere/auth');

router.get('/', function _callee(req, res) {
  var course;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Course.find().sort({
            title: title
          }));

        case 2:
          course = _context.sent;

          if (course) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(404).send('course not found'));

        case 5:
          res.status(200).send(course);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/create', auth, function _callee2(req, res) {
  var _validate, error, cotegory, course;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _validate = validate(req.body), error = _validate.error;

          if (!error) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).send(error.details[0].message));

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(Cotegory.findById(req.body.cotegory));

        case 5:
          cotegory = _context2.sent;

          if (course) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(404).send('not found'));

        case 8:
          course = new Course({
            title: req.body.title,
            cotegory: req.body.cotegoryId,
            //    { 
            //       _id : cotegory._id,
            //       name :cotegory.name
            //    },
            trainer: req.body.trainer,
            tags: req.body.tags,
            status: req.body.status
          });

          _readOnlyError("course");

          _context2.next = 12;
          return regeneratorRuntime.awrap(course.save());

        case 12:
          course = _context2.sent;
          res.status(201).send(course);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;