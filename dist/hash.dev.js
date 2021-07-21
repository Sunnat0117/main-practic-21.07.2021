"use strict";

var bcrypt = require('bcrypt');

function getSalt() {
  var password, salt;
  return regeneratorRuntime.async(function getSalt$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          password = "5521deokcmo";
          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.genSalt());

        case 3:
          salt = _context.sent;
          // password  = await bcrypt.hash(password, salt)   
          console.log(salt);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

getSalt();