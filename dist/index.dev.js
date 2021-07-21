"use strict";

var _require = require("express"),
    Router = _require.Router;

var express = require("express");

var mongoose = require("mongoose");

var customeriesRouter = require("./router/customer");

var courseRouter = require("./router/course");

var cotegoryRouter = require("./router/cotegory");

var userRouter = require("./router/users");

var authRouter = require("./router/auth");

var config = require('config');

var bodyParser = require('body-parser');

if (!config.get('jwtPriveteKey')) {
  console.error('jiddiy hato: muhit uzgaruvchisi topilmadi yoki hato kiritilgan iltimos tekshiring');
  process.exit(0);
}

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/customers", customeriesRouter);
app.use("/api/course", courseRouter);
app.use("/api/cotegory", cotegoryRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
mongoose.connect('mongodb://localhost/videoDarslik', {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  console.log("mongoose connected");
})["catch"](function (err) {
  console.error(err);
});
app.get("/", function (req, res) {
  res.send('good.  this is root page');
});
app.listen(3000, function () {
  console.log('server running on 3000 port');
});