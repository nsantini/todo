"use strict";

var express = require('express');
var app = express();
var routers = {};
var todoRouter = express.Router();
routers.todoRouter = todoRouter;
var listsRouter = express.Router();
routers.listsRouter = listsRouter;

require('./config.js')(app, express, routers);

require('../todo/todo_routes.js')(todoRouter);

require('../lists/lists_routes.js')(listsRouter);

module.exports = exports = app;
