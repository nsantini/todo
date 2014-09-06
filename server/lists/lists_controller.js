"use strict";

var Lists = require('./Lists_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Lists.find, Lists);
    $promise()
      .then(function (lists) {
        res.json(lists);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
        var list = req.body.list;
        if (!list._id) {
          var $promise = Q.nbind(Lists.create, Lists);
          $promise(list)
            .then(function (id) {
              res.send(id);
            })
            .fail(function (reason) {
              next(reason);
            });
        } else {
          Lists.updateQ({_id: list._id}, list)
            .then(function (id) {
              res.send(id);
            })
            .fail(function (reason) {
              next(reason);
            });
        }
  },

  delete: function (req, res, next) {
    Lists.removeQ({_id: req.params.id})
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};
