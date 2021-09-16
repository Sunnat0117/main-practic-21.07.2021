"use strict";

var mongoose = require('mongoose');

var Joi = require('joi');

var _require = require('joi'),
    string = _require.string,
    _boolean = _require["boolean"];

var jwt = require('jsonwebtoken');

var config = require('config');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function () {
  var token = jwt.sign({
    _id: this._id,
    isAdmin: this.isAdmin
  }, config.get('jwtPriveteKey'));
  return token;
};

var User = mongoose.model("User", userSchema);

function userValidate(user) {
  var schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string(),
    isAdmin: Joi["boolean"]().required()
  });
  return schema.validate(user);
}

exports.User = User;
exports.validate = userValidate;