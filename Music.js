var app = angular.module("app",[]);
app.controller('musicCtrl', function($scope,$http) {
$http.get("MusicTrack.json").success( function(response) {
      $scope.data = response; 
   });
});
