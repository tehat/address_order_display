/**
 * Created by Thomas on 11/16/15.
 */
var myApp = angular.module("myApp", []);
console.log("is this working 1?");



myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    console.log("is this working 2?");

    $scope.users = {};
    $scope.usersArray = [];

    $scope.addresses = {};
    $scope.addressesArray = [];

    ////POST
    //$scope.clickButton = function(request){
    //    console.log("button click",request);
    //
    //    $http.post('/people', request).then(function(response){
    //        $scope.getPeople();
    //    })
    //    $scope.note = {};
    //};

    //GET Users
    $scope.getUsers = function(){
        console.log("is this working 3?");
        $http.get('/users').then(function(response){
            console.log(response.data);
            $scope.usersArray = response.data;
        });
    };

    $scope.getUsers();

    //GET Users Addresses
    $scope.getAddresses = function(){
        console.log("is this working 3?");
        $http.get('/addresses').then(function(response){
            console.log(response.data);
            $scope.addressesArray = response.data;
        });
    };

    $scope.getAddresses();

}]);
