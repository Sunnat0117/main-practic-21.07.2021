"use strict";

var express = require('express');

var _require = require('joi'),
    required = _require.required;

var router = express.Router();

var _require2 = require("../models/customers"),
    validateCustomer = _require2.validateCustomer,
    Customer = _require2.Customer;

router.get('/', function _callee(req, res) {
  var customers;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Customer.find().sort('name'));

        case 2:
          customers = _context.sent;
          res.status(200).send(customers);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/create', function _callee2(req, res) {
  var _ref, error, customer;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(validateCustomer(req.body));

        case 2:
          _ref = _context2.sent;
          error = _ref.error;

          if (!error) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).send(error.details[0].message));

        case 6:
          customer = new Customer({
            name: req.body.name,
            phone: req.body.phone,
            ifVip: req.body.ifVip
          });
          _context2.next = 9;
          return regeneratorRuntime.awrap(customer.save());

        case 9:
          customers = _context2.sent;
          res.status(201).send(customers);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // get by id so'rovini qilish kk
// put by id so'rovini qilish
// delete by id so'rovi

router.get('/all', function _callee3(req, res) {
  var customer;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Customer.find());

        case 2:
          customer = _context3.sent;
          res.status(200).send(customer);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.put('/update/:id', function _callee4(req, res) {
  var customer;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Customer.findById(req.params.id));

        case 2:
          customer = _context4.sent;
          customer.name = req.body.name;
          res.status(201).send(customer);
          _context4.next = 7;
          return regeneratorRuntime.awrap(customer.save());

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router["delete"]('/delete/:id', function _callee5(req, res) {
  var customer;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Customer.findByIdAndRemove(req.params.id));

        case 2:
          customer = _context5.sent;

          if (customer) {
            _context5.next = 5;
            break;
          }

          return _context5.abrupt("return", res.status(404).send("not found"));

        case 5:
          res.send(customer);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;