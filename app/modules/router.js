function config($stateProvider, $httpProvider, $urlRouterProvider) {
    $httpProvider.defaults.useXDomain = true;

    $httpProvider.defaults.headers.common = {Accept: "application/json, text/plain, */**"};
    $httpProvider.defaults.headers.post = {"Content-Type": "application/json;charset=utf-8"};
    
        $urlRouterProvider.otherwise('/login');
    
        $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginCtrl as vm',
            templateUrl: 'modules/lista/views/login.html',
        })
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl as vm',
            templateUrl: 'modules/commons/views/main.html'
        })
        
        .state('main.todo', {
            url: 'lista',
            controller: 'TodoCtrl as vm',
            resolve:{
                ckeck : function($rootScope,$location){
                    if (!$rootScope.loggedIn ) {
                        $location.path('/login');
                    }
                }
            },
            templateUrl: 'modules/todo/views/todo.html'
        })
      
        .state('main.todo-create', {
            url: 'todo/create',
            controller: 'TodoCreateCtrl as vm',
            templateUrl: 'modules/todo/views/todo.create.html'
        })
        // .state('main.todo-update', {
        //     url: 'todo/update/:id',
        //     controller: 'TodoUpdateCtrl as vm',
        //     templateUrl: 'modules/todo/views/todo.update.html'
        // });
      
        
    }
    
    angular.module('appList').config(config);