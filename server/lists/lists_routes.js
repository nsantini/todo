"use strict";

var controller = require('./lists_controller.js');

module.exports = exports = function (router) {
  router.route('/')
    .post(controller.post)
    .get(controller.get);
  router.route('/delete/:id')
    .delete(controller.delete);
};
