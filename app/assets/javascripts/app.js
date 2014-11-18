// // 'use strict';

// /* App Module */

// if(typeof angular == 'undefined'){
// 	console.log("not loaded");
// }

// var taskApp = angular.module('taskApp', [
//   'ngRoute',
//   'taskAppControllers',
//   'taskAppServices'
// ]);

// taskApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/timer', {
//         templateUrl: 'tasks/timer.html.erb',
//         controller: 'TaskListCtrl'
//       }).
//       otherwise({
//         redirectTo: '/phones'
//       });
//   }]);