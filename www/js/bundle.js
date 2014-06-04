(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function($scope) {
    $scope.menuItems = [
        {
            title: 'Todos',
            href: '#/app/todos'
        }
    ];
};

},{}],2:[function(require,module,exports){
module.exports = function($scope) {
    $scope.todos = [
        {
            title: 'Test',
            status: 'Boo'
        },
        {
            title: 'Who',
            status: 'fun'
        }
    ];
};

},{}],3:[function(require,module,exports){
angular.module('yata', ['ionic'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(require('./routes'))
    .controller('AppCtrl', require('./controllers/app'))
    .controller('TodosCtrl', require('./controllers/todos'));

},{"./controllers/app":1,"./controllers/todos":2,"./routes":4}],4:[function(require,module,exports){
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
                    controller: 'TodosCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/todos');
};

},{}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWljaGFlbGRhdmlzL2Rldi95YXRhL21vYmlsZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21pY2hhZWxkYXZpcy9kZXYveWF0YS9tb2JpbGUvbGliL3NjcmlwdHMvY29udHJvbGxlcnMvYXBwLmpzIiwiL1VzZXJzL21pY2hhZWxkYXZpcy9kZXYveWF0YS9tb2JpbGUvbGliL3NjcmlwdHMvY29udHJvbGxlcnMvdG9kb3MuanMiLCIvVXNlcnMvbWljaGFlbGRhdmlzL2Rldi95YXRhL21vYmlsZS9saWIvc2NyaXB0cy9tYWluLmpzIiwiL1VzZXJzL21pY2hhZWxkYXZpcy9kZXYveWF0YS9tb2JpbGUvbGliL3NjcmlwdHMvcm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5tZW51SXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVG9kb3MnLFxuICAgICAgICAgICAgaHJlZjogJyMvYXBwL3RvZG9zJ1xuICAgICAgICB9XG4gICAgXTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS50b2RvcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUZXN0JyxcbiAgICAgICAgICAgIHN0YXR1czogJ0JvbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdXaG8nLFxuICAgICAgICAgICAgc3RhdHVzOiAnZnVuJ1xuICAgICAgICB9XG4gICAgXTtcbn07XG4iLCJhbmd1bGFyLm1vZHVsZSgneWF0YScsIFsnaW9uaWMnXSlcbiAgICAucnVuKGZ1bmN0aW9uKCRpb25pY1BsYXRmb3JtKSB7XG4gICAgICAgICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICAgICAgICAgLy8gZm9yIGZvcm0gaW5wdXRzKVxuICAgICAgICAgICAgaWYod2luZG93LmNvcmRvdmEgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgICAgICAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAgICAgICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgICAgICAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAuY29uZmlnKHJlcXVpcmUoJy4vcm91dGVzJykpXG4gICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2FwcCcpKVxuICAgIC5jb250cm9sbGVyKCdUb2Rvc0N0cmwnLCByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3RvZG9zJykpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdhcHAnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL2FwcFwiLFxuICAgICAgICAgICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvbWVudS5odG1sXCIsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwQ3RybCdcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdhcHAudG9kb3MnLCB7XG4gICAgICAgICAgICB1cmw6IFwiL3RvZG9zXCIsXG4gICAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAgICdtZW51Q29udGVudCcgOntcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL3RvZG9zLmh0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RvZG9zQ3RybCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC90b2RvcycpO1xufTtcbiJdfQ==
