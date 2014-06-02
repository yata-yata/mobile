(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

},{}],2:[function(require,module,exports){
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});


require('./controllers/controllers.js');

},{"./controllers/controllers.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWljaGFlbGRhdmlzL2Rldi95YXRhL21vYmlsZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21pY2hhZWxkYXZpcy9kZXYveWF0YS9tb2JpbGUvbGliL3NjcmlwdHMvY29udHJvbGxlcnMvY29udHJvbGxlcnMuanMiLCIvVXNlcnMvbWljaGFlbGRhdmlzL2Rldi95YXRhL21vYmlsZS9saWIvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImFuZ3VsYXIubW9kdWxlKCdzdGFydGVyLmNvbnRyb2xsZXJzJywgW10pXG5cbi5jb250cm9sbGVyKCdBcHBDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG59KVxuXG4uY29udHJvbGxlcignUGxheWxpc3RzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgIHsgdGl0bGU6ICdSZWdnYWUnLCBpZDogMSB9LFxuICAgIHsgdGl0bGU6ICdDaGlsbCcsIGlkOiAyIH0sXG4gICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgIHsgdGl0bGU6ICdJbmRpZScsIGlkOiA0IH0sXG4gICAgeyB0aXRsZTogJ1JhcCcsIGlkOiA1IH0sXG4gICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gIF07XG59KVxuXG4uY29udHJvbGxlcignUGxheWxpc3RDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMpIHtcbn0pXG4iLCIvLyBJb25pYyBTdGFydGVyIEFwcFxuXG4vLyBhbmd1bGFyLm1vZHVsZSBpcyBhIGdsb2JhbCBwbGFjZSBmb3IgY3JlYXRpbmcsIHJlZ2lzdGVyaW5nIGFuZCByZXRyaWV2aW5nIEFuZ3VsYXIgbW9kdWxlc1xuLy8gJ3N0YXJ0ZXInIGlzIHRoZSBuYW1lIG9mIHRoaXMgYW5ndWxhciBtb2R1bGUgZXhhbXBsZSAoYWxzbyBzZXQgaW4gYSA8Ym9keT4gYXR0cmlidXRlIGluIGluZGV4Lmh0bWwpXG4vLyB0aGUgMm5kIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiAncmVxdWlyZXMnXG4vLyAnc3RhcnRlci5jb250cm9sbGVycycgaXMgZm91bmQgaW4gY29udHJvbGxlcnMuanNcbmFuZ3VsYXIubW9kdWxlKCdzdGFydGVyJywgWydpb25pYycsICdzdGFydGVyLmNvbnRyb2xsZXJzJ10pXG5cbi5ydW4oZnVuY3Rpb24oJGlvbmljUGxhdGZvcm0pIHtcbiAgJGlvbmljUGxhdGZvcm0ucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gSGlkZSB0aGUgYWNjZXNzb3J5IGJhciBieSBkZWZhdWx0IChyZW1vdmUgdGhpcyB0byBzaG93IHRoZSBhY2Nlc3NvcnkgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcbiAgICBpZih3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgIH1cbiAgICBpZih3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn0pXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcblxuICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgdXJsOiBcIi9hcHBcIixcbiAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL21lbnUuaHRtbFwiLFxuICAgICAgY29udHJvbGxlcjogJ0FwcEN0cmwnXG4gICAgfSlcblxuICAgIC5zdGF0ZSgnYXBwLnNlYXJjaCcsIHtcbiAgICAgIHVybDogXCIvc2VhcmNoXCIsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnIDp7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL3NlYXJjaC5odG1sXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAuc3RhdGUoJ2FwcC5icm93c2UnLCB7XG4gICAgICB1cmw6IFwiL2Jyb3dzZVwiLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21lbnVDb250ZW50JyA6e1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy9icm93c2UuaHRtbFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnBsYXlsaXN0cycsIHtcbiAgICAgIHVybDogXCIvcGxheWxpc3RzXCIsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWVudUNvbnRlbnQnIDp7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL3BsYXlsaXN0cy5odG1sXCIsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlsaXN0c0N0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLnN0YXRlKCdhcHAuc2luZ2xlJywge1xuICAgICAgdXJsOiBcIi9wbGF5bGlzdHMvOnBsYXlsaXN0SWRcIixcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtZW51Q29udGVudCcgOntcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvcGxheWxpc3QuaHRtbFwiLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgLy8gaWYgbm9uZSBvZiB0aGUgYWJvdmUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9wbGF5bGlzdHMnKTtcbn0pO1xuXG5cbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvY29udHJvbGxlcnMuanMnKTtcbiJdfQ==
