(function (angular) {
  "use strict";

  angular.module('todoApp')
    .factory('todoService', ['$http', function($http) {
      return {
        save: function(todo) {
          $http.post('/todo', { 'todo': todo });
        },
        load: function(callback) {
          $http.get('/todo').success(callback);
        },
        remove: function(todo) {
          $http.delete('/todo/' + todo._id);
        }
      };
    }]);
}(angular));
