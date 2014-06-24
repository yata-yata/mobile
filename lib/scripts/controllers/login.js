module.exports = function($scope, $window, $ionicPlatform, $http, $q) {
    var googleapi = {
        authorize: function(options) {
            var deferred = $q.defer();

            //Build the OAuth consent page URL
            var authUrl = 'https://accounts.google.com/o/oauth2/auth?client_id=' + options.client_id + '&redirect_uri=' + options.redirect_uri + '&response_type=' +  'code' + '&scope=' + options.scope.join(' ');

            //Open the OAuth consent page in the InAppBrowser
            var authWindow = $window.open(authUrl, '_blank', 'location=no,toolbar=no');

            //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
            //which sets the authorization code in the browser's title. However, we can't
            //access the title of the InAppBrowser.
            //
            //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
            //authorization code will get set in the url. We can access the url in the
            //loadstart and loadstop events. So if we bind the loadstart event, we can
            //find the authorization code and close the InAppBrowser after the user
            //has granted us access to their data.
            var onWindowLoad = function(e) {
                var url = e.url;
                var code = /\?code=(.+)$/.exec(url);
                var error = /\?error=(.+)$/.exec(url);

                if (code || error) {
                    //Always close the browser when match is found
                    authWindow.close();
                }

                if (code) {
                    //Exchange the authorization code for an access token
                    $http.post('http://localhost:8002/auth/google/token', {
                        code: code[1],
                        client_id: options.client_id,
                        redirect_uri: options.redirect_uri,
                        grant_type: 'authorization_code'
                    }).then(function(data) {
                        deferred.resolve(data);
                    }, function(response) {
                        deferred.reject(response.responseJSON);
                    });
                } else if (error) {
                    //The user denied access to the app
                    deferred.reject({
                        error: error[1]
                    });
                }
            };
            authWindow.addEventListener('loadstart', onWindowLoad);

            return deferred.promise;
        }
    };
    $ionicPlatform.ready(function() {
        $scope.authorize = function(){
            googleapi.authorize({
                client_id: '26996631478-mr5ejnj9edjti5vqln1opag5i15r92cg.apps.googleusercontent.com',
                redirect_uri: 'http://localhost',
                scope: ['openid', 'email']
            }).then(function(data) {
                $scope.status = data.access_token;
                window.sessionStorage.set('access_token', $scope.status);
            }, function(data) {
                $scope.status = data.error;
            });
        };
    });
};
