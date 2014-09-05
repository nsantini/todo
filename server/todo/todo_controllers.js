"use strict";

var Todo = require('./todo_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Todo.find, Todo);
    $promise()
      .then(function (todos) {
        res.json(todos);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
        var todo = req.body.todo;
        if (!todo._id) {
          var $promise = Q.nbind(Todo.create, Todo);
          $promise(todo)
            .then(function (id) {
              res.send(id);
            })
            .fail(function (reason) {
              next(reason);
            });
        } else {
          Todo.updateQ({_id: todo._id}, todo)
            .then(function (id) {
              res.send(id);
            })
            .fail(function (reason) {
              next(reason);
            });
        }
  },

  delete: function (req, res, next) {
    Todo.removeQ({_id: req.params.id})
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};
