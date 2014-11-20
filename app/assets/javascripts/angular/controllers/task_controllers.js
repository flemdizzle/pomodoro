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
        
        $scope.tasks = [];
        $scope.loadTask = function(){
            $scope.tasks.push(Tasks.query());
        };
        $scope.loadTask();
        $scope.tasks = Tasks.query(); //it's getting Task collection
        $scope.deleteTask = function(taskId) {
            Task.destroy({
                id: taskId
            });

        };
        $scope.save = function() {
                Tasks.create({
                    task: $scope.task
                });
                $scope.tasks.push($scope.task);
                $scope.task = {};
        };
        $scope.update = function(id, task){
           Task.update({
            id: id,
            task: task
            });
        };

    }
]);
