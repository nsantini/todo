"use strict";

var controller = require('./todo_controllers.js');

module.exports = exports = function (router) {
  router.route('/')
    .post(controller.post);
  router.route('/:id')
      .get(controller.get);
  router.route('/delete/:id')
    .delete(controller.delete);
};
