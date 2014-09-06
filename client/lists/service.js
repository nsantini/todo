(function (angular) {
  "use strict";

  angular.module('todoApp')
    .factory('listService', ['$http', function($http) {
      return {
        save: function(list) {
          $http.post('/lists', { 'list': list });
        },
        load: function(callback) {
          $http.get('/lists').success(callback);
        }
      };
    }]);
}(angular));
