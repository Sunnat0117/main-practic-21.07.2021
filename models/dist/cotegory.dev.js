"use strict";

var mongoose = require('mongoose');

var Joi = require('joi');

var cotegorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}); // const Cotegory = mongoose.model('Cotegory', cotegorySchema)

var Cotegory = mongoose.model('Cotegory', new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}));

function validateCotegory(cotegory) {
  var schema = Joi.object({
    name: Joi.string().required()
  });
  return schema.validate(cotegory);
}

module.exports = validateCotegory;
module.exports = Cotegory;
module.exports = cotegorySchema;