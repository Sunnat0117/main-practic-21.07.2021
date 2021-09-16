const express = require("express");
const config = require('config');
const winston = require('winston')
const jwt = require('jsonwebtoken')
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/prod')(app); 


const server = app.listen(3000, ()=>{
    winston.info('server running on 3000 port');
});
winston.info(jwt.sign({_id : this._id, isAdmin: this.isAdmin}, config.get('jwtPriveteKey')))

module.exports = server;







