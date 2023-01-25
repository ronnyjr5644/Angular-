(function(){
    'use strict';
    angular.module('MsgApp', [])
    .controller('MsgController',MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.name = "raunak";
        $scope.say=function (){
            return "grind grind grind";
        }
        $scope.state="hungry";
        $scope.feedronny=function(){
            $scope.state="fed";
        };
    }
    
    
})();