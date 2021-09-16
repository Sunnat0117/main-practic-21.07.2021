"use strict";

var express = require("express");

var customeriesRouter = require("../router/customer");

var courseRouter = require("../router/course");

var cotegoryRouter = require("../router/cotegory");

var userRouter = require("../router/users");

var authRouter = require("../router/auth");

var errorMiddlewere = require('../middlewere/error');

var app = express();

var bodyParser = require('body-parser'); // const { Router } = require("express");


module.exports = function () {
  app.use(express.json());
  app.use(bodyParser.json({
    extended: true
  }));
  app.use("/api/customers", customeriesRouter);
  app.use("/api/course", courseRouter);
  app.use("/api/cotegory", cotegoryRouter);
  app.use("/api/users", userRouter);
  app.use("/api/auth", authRouter);
  app.use(errorMiddlewere);
};