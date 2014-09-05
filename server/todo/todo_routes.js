"use strict";

var controller = require('./todo_controllers.js');

module.exports = exports = function (router) {
  router.route('/')
    .get(controller.get)
    .post(controller.post);
  router.route('/:id')
    .delete(controller.delete);
};
