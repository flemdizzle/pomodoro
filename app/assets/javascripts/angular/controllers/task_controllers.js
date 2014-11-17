var myApp = angular.module('taskApp', ['ngResource']);

// factory
myApp.factory('Tasks', ['$resource',
    function($resource) {
        return $resource('/tasks.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            },
            create: {
                method: 'POST'
            }
        });
    }
]);

myApp.factory('Task', ['$resource',
    function($resource) {
        return $resource('/tasks/:id', {}, {
            show: {
                method: 'GET'
            },
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            },
            destroy: {
                method: 'DELETE',
                params: {
                    id: '@id'
                }
            }
        });
    }
]);

// index action
myApp.controller("TaskListCtrl", ['$scope', '$resource', 'Tasks', 'Task', '$location',
    function($scope, $resource, Tasks, Task, $location) {
        $scope.tasks = Tasks.query(); //it's getting Task collection
        $scope.deleteTask = function(taskId) {
            Task.destroy({
                id: taskId
            });
            $scope.tasks = Tasks.query(); // after delete task get tasks collection.
        };

        // $scope.addTask = function() {
        //     task = Task.save($scope.newTask);
        //     $scope.newEntry = {};
        // };
        $scope.save = function() {
                Tasks.create({
                    task: $scope.task
                });
                $scope.tasks = Tasks.query();
                $scope.task = {};
        };

    }
]);

// create action
// myApp.controller("TaskAddCtrl", ['$scope', '$resource', 'Tasks', '$location', function($scope, $resource, Tasks, $location) {
//   $scope.save = function () {
//     if ($scope.taskForm.$valid){
//       Tasks.create({task: $scope.task}, function(){
//       $location.path('/');
//     }, function(error){
//       console.log(error);
//     });
//   }
//  };
// }]);

// update action
// myApp.controller("TaskUpdateCtr", ['$scope', '$resource', 'Task', '$location', '$routeParams', function($scope, $resource, Task, $location, $routeParams) {
//    $scope.task = Task.get({id: $routeParams.id});
//    $scope.update = function(){
//      if ($scope.listForm.$valid){
//        Task.update($scope.task,function(){
//          $location.path('/');
//        }, function(error) {
//          console.log(error);
//       });
//      }
//    };
// }]);

// delete action
// myApp.controller("TaskListCtr", ['$scope', '$http', '$resource', 'Tasks', 'Task', '$location', function($scope, $http, $resource, Tasks, Task, $location) {

//   $scope.Tasks = Tasks.query();

//   $scope.deleteTask = function (taskId) {
// 	console.log("hi");
//     if (confirm("Are you sure you want to delete this task?")){
//       Task.delete({ id: taskId }, function(){
//         $scope.tasks = Tasks.query();   // after delete task get users collection.
//         $location.path('/');
//       });
//     }
//   };
// }]);

// routes
// myApp.config([
//  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//  $routeProvider.when('/tasks',{
//     templateUrl: '/templates/tasks/index.html',
//     controller: 'TaskListCtr'
//  });
//  $routeProvider.when('/tasks/new', {
//    templateUrl: '/templates/tasks/new.html',
//    controller: 'TaskAddCtr'
//  });
//  $routeProvider.when('/tasks/:id/edit', {
//    templateUrl: '/templates/tasks/edit.html',
//    controller: "TaskUpdateCtr"
//  });
//  $routeProvider.otherwise({
//    redirectTo: '/tasks'
//  });
//  }
// ]);