"use strict";

var request = require('supertest');

var server;

var _require = require('../../models/cotegory'),
    Cotegory = _require.Cotegory;

describe('api /cotegories', function () {
  beforeEach(function () {
    server = require('../../index');
  });
  afterEach(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            server.close();
            _context.next = 3;
            return regeneratorRuntime.awrap(Cotegory.remove({}));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  describe('GET', function () {
    it('should return all cotegories', function _callee2() {
      var cotegory, response;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Cotegory.collection.insertMany([
              //     {name :"3D max"},
              //     {name : 'nodejs'}
              // ]);      
              cotegory = new Cotegory({
                name: "SMM"
              });
              _context2.next = 3;
              return regeneratorRuntime.awrap(cotegory.save());

            case 3:
              _context2.next = 5;
              return regeneratorRuntime.awrap(request(server).get('/api/cotegory/'));

            case 5:
              response = _context2.sent;
              console.log("bu cotegory classi", Cotegory);
              expect(response.status).toBe(200);
              expect(response.body.length).toBe(2);
              expect(response.body.some(function (cat) {
                return cat.name == '3D max';
              })).toBeThruthy();

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
  });
});
describe('GET/ID', function () {
  it('should return cotegory if the valid id is given', function _callee3() {
    var cotegory, response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            cotegory = new Cotegory({
              name: 'sun\'iy idrok'
            });
            _context3.next = 3;
            return regeneratorRuntime.awrap(cotegory.save());

          case 3:
            response = request(server).get('api/cotegory/' + cotegory._id);
            expect(response.body).toHaveProperty('name', "sun\'iy idrok");

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});