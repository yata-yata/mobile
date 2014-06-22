var modules = require('angular-modules');

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

    // Controllers
    .controller('AppCtrl', require('./controllers/app'))
    .controller('LoginCtrl', require('./controllers/login'))
    .controller('TodoCtrl', modules.controllers.todo)

    // Directives
    .directive('swipeLeft', modules.directives.touch.swipeLeft)
    .directive('swipeRight', modules.directives.touch.swipeRight)

    // Services
    .factory('todoService', modules.services.todo);

