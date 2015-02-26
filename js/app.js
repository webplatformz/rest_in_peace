angular.module('reveal', ['ngSanitize'])

.controller('revealCtrl', function($scope, $http) {
    $scope.coolMode = false;
    $scope.restURL = "";
    $scope.restresult = "Antwort";
    $scope.restbody = "";
    
    $scope.helpURL = function(){
       $scope.restURL = "http://transport.opendata.ch/v1/locations?query=Basel"; 
    }
    $scope.helpURL1 = function(){
       $scope.restURL = "http://transport.opendata.ch/v1/locations?query=Basel"; 
    }
    $scope.helpURL2 = function(){
       $scope.restURL = "http://transport.opendata.ch/v1/locations?query=Basel"; 
    }
    
    $scope.getUrl = function(ev){
        $http.get($scope.restURL).success(function(result){
            $scope.restresult = $scope.prettyfyJSON(result);
        }).error(function(){
            $scope.restresult = "Error on ressource";
        });
    };
    $scope.postUrl = function(ev){
        $http.post($scope.restURL, JSON.parse($scope.restbody)).success(function(result){
            $scope.restresult = $scope.prettyfyJSON(result);
        }).error(function(){
            $scope.restresult = "Error on ressource";
        });
    };
    
    $scope.prettyfyJSON = function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match)      {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
});