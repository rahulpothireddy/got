//var myApp = angular.module('eplApp', ['ngRoute']); 

myApp.controller('Controller2015', ['$http', function ($http) {

  var main = this; //without the use of scope.

        this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
       
    
    this.allmatches2015 = [];
    this.rounds2015 = [];

   this.loadMatches = function(){

                $http({
                 method: 'GET',
                 url:main.baseUrl1
                  }).then(function successCallback(response) { // asynchronous callback
                    
                    console.log(response);// if the response is available also shown on console
                    main.allmatches2015 = response.data;
                    main.rounds2015 = response.data.rounds;
                    console.log("madhav");     //redundant code for authenticity.
                 
                  }, function errorCallback(response) { //  asynchronously called if an error occurs.
                                                         
                                                                  
                 alert("Please check console for error logs..");

                   })
                 };

                      this.loadMatches() // calling the function
                 
           

                }]) // Controller2015 ends   

