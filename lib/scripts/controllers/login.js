module.exports = function($scope, $window) {
    $scope.open = function(){
        $window.open('http://google.com', '_blank', 'location=no,toolbar=no')
    };
};
