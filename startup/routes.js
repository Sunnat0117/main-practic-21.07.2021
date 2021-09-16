const express = require("express");
const customeriesRouter = require("../router/customer");
const courseRouter = require("../router/course");
const cotegoryRouter = require("../router/cotegory");
const userRouter = require("../router/users")
const authRouter = require("../router/auth")
const errorMiddlewere = require('../middlewere/error')
const app = express();
const bodyParser =require('body-parser')

// const { Router } = require("express");

module.exports = function () {
    app.use(express.json());
    app.use(bodyParser.json({ extended: true}));
    app.use("/api/customers", customeriesRouter);
    app.use("/api/course", courseRouter);
    app.use("/api/cotegory", cotegoryRouter);
    app.use("/api/users", userRouter);
    app.use("/api/auth", authRouter);
    app.use(errorMiddlewere);

}