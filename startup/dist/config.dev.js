"use strict";

var config = require('config');

module.exports = function () {
  if (!config.get('jwtPriveteKey')) {
    throw new Error('jiddiy hato: muhit uzgaruvchisi topilmadi yoki hato kiritilgan iltimos tekshiring');
  }
};