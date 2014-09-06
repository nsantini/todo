(function (angular) {
  "use strict";

  angular.module('todoApp')
    .controller('TodoCtrl', ['$scope', '$routeParams', 'todoService',
    function ($scope, $routeParams, todoService) {

      $scope.todoList = [];

      $scope.newTodo = "";

      todoService.load($routeParams.listId, function (data) {
        $scope.todoList = data;
      });

      $scope.addTodo = function() {
        if (this.newTodo.length) {
          var todo = { listId: $routeParams.listId, done: false, text: this.newTodo };
          this.todoList.push(todo);
          this.newTodo = "";
          todoService.save(todo);
        }
      };

      $scope.setDone = function(index) {
        var todo = this.todoList[index];
        todo.done = true;
        todoService.save(todo);
      };

      $scope.editTodo = function(index) {
        this.todoList[index].editing = true;
        this.newTodo = this.todoList[index].text;
      };

      $scope.finishEditTodo = function(index) {
        this.removeTodo(index);
        this.addTodo();
      };

      $scope.removeTodo = function(index) {
        var todo = this.todoList[index];
        this.todoList.splice(index, 1);
        todoService.remove(todo);
      };
    }]);
}(angular));
