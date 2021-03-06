var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

//TODO:// to be removed
require("./models/User");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //gelen formdaki bilgileri req.body icine yerlestirir
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter); //use gelen istekleri indexRouter git
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

// MVC
// MODEL - Postgresql
// View - Ejs Template
// Controller

// RESTFUL API(request response iletisimini saglar)
// User API

// CRUD OPERATIONS;
// CREATE -- add user
// READ --list user
// UPDATE --edit user
// DELETE --delete user
