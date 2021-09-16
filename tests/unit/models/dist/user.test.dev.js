"use strict";

var _require = require('../../../models/user'),
    User = _require.User;

var jwt = require('jsonwebtoken');

var config = require('config');

describe('user.generateAuthToken', function () {
  it('should return the token if this is valid', function () {
    var user = new User({
      isAdmin: true
    });
    var token = user.generateAuthToken();
    var decodedObject = jwt.verify(token, config.get('jwtPriveteKey'));
    expect(decodedObject).toMatchObject({
      isAdmin: true
    });
  });
});