angular.module('reveal', [])

.controller('revealCtrl', function($scope, $http) {
    $scope.coolMode = false;
    $scope.restURL = "";
    $scope.restresult = "";
    
    $scope.helpURL = function(){
       $scope.restURL = "http://transport.opendata.ch/v1/locations?query=Basel"; 
    }
    
    $scope.getUrl = function(ev){
        $http.get($scope.restURL).success(function(result){
            $scope.restresult = JSON.stringify(result);
        }).error(function(){
            $scope.restresult = "Error on ressource";
        });
    };
});