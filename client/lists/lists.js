(function (angular) {
  "use strict";

  angular.module('todoApp')
    .controller('ListsCtrl', ['$scope', 'listService', function ($scope, listService) {
      $scope.lists = [];

      $scope.newList = "";

      listService.load(function (data) {
        $scope.lists = data;
      });

      $scope.addList = function() {
        if (this.newList.length) {
          var list = { name: this.newList };
          this.lists.push(list);
          this.newList = "";
          listService.save(list);
        }
      };
    }]);
  }(angular));
