'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/lists', {
          templateUrl: 'lists/lists.tpl.html',
          controller: 'ListsCtrl'
        }).
        when('/lists/:listId', {
          templateUrl: 'todo/todo.tpl.html',
          controller: 'TodoCtrl'
        }).
        otherwise({
          redirectTo: '/lists'
        });
    }]);
