//var myApp = angular.module('eplApp', ['ngRoute']); 
myApp.controller('Controller2016', ['$http', function ($http) { //without using scope

    
    var main = this;

    this.allmatches2016 = [];
    this.rounds2016 = [];

    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
    


    this.loadMatches = function () {

        $http({
            method: 'GET',
            url: main.baseUrl
        }).then(function successCallback(response) { // asynchronous callback
            
            console.log(response);  // if the response is available also shown on console
            main.allmatches2016 = response.data;
            main.rounds2016 = response.data.rounds;
            console.log("madhav"); //redundant code for authenticity.
                 
        }, function errorCallback(response) { //  asynchronously called if an error occurs.
            
            alert("some error occurred. Check the console.");
            console.log(response);

        });


    } 

    this.loadMatches();



  
}]); // end controller2016
