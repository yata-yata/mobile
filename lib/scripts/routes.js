module.exports = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })
        .state('app.todos', {
            url: "/todos",
            views: {
                'menuContent' :{
                    templateUrl: "templates/todos.html",
                    controller: 'TodoCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/todos');
};
