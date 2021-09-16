const mongoose = require("mongoose");
// const winston = require("winston");
const winston = require('winston')
const config = require('config')
module.exports = function () {
    mongoose.connect(config.get('db'), {
            useUnifiedTopology: true,
            useNewUrlParser: true

        }).then(() => {
            winston.debug("mongoose connected");
        });
        mongoose.set('useFindAndModify', true)
    }