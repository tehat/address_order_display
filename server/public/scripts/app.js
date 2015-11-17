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

    $scope.selection = {};
    $scope.usersAddressesArray = [];

    //GET Users
    $scope.getUsers = function(){
        console.log("is this working 3?");
        $http.get('/users').then(function(response){
            console.log(response.data);
            $scope.usersArray = response.data;
        });
    };

    $scope.getUsers();

    ////GET Addresses
    //$scope.getAddresses = function(){
    //    console.log("is this working 4?");
    //    $http.get('/addresses').then(function(response){
    //        console.log(response.data);
    //        $scope.addressesArray = response.data;
    //    });
    //};
    //
    //$scope.getAddresses();

    //GET Chosen users addresses
    $scope.change = function(name){
        console.log("selection made for addresses", $scope.selection);

        if(name){$http.get('/change/' + name).then(function(response){
            console.log(response);
            $scope.usersAddressesArray = response.data;
        });}
    };

    $scope.change();

}]);
