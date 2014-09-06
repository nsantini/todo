(function (angular) {
  "use strict";

  angular.module('todoApp')
    .factory('todoService', ['$http', function($http) {
      return {
        save: function(todo) {
          $http.post('/todo', { 'todo': todo });
        },
        load: function(id, callback) {
          $http.get('/todo/' + id).success(callback);
        },
        remove: function(todo) {
          $http.delete('/todo/delete/' + todo._id);
        }
      };
    }]);
}(angular));
