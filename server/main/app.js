"use strict";

var express = require('express');
var app = express();
var routers = {};
var todoRouter = express.Router();
routers.todoRouter = todoRouter;

require('./config.js')(app, express, routers);

require('../todo/todo_routes.js')(todoRouter);

module.exports = exports = app;
