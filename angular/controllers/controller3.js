//var myApp = angular.module('eplApp', ['ngRoute']); 
myApp.controller('ViewController2015', ['$http','$scope', function ($http,$scope) {

  var main = this;

        this.baseUrl = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
       
    
    this.allmatches2015 = [];
    this.rounds2015 = [];

   this.loadMatches = function(){

                $http({
                 method: 'GET',
                 url:main.baseUrl
                  }).then(function successCallback(response) {  // asynchronous callback
                  
                    console.log(response);  // if the response is available also shown on console
                    main.allmatches2015 = response.data;
                    main.rounds2015 = response.data.rounds;
                    console.log("madhav");     //redundant code for authenticity.
                    
                  

                  }, function errorCallback(response) {  //  asynchronously called if an error occurs.
                   
                 alert("Please check console for error logs..");

                   });
                 

                 }

                       
    this.loadMatches();
    $scope.name = '';
    
    $scope.submit = function () {
        
        if ($scope.name) {
            $scope.won = ''; $scope.lost = ''; $scope.draw = ''; $scope.count = 0; $scope.points = ''; $scope.winpercent = ''; $scope.error = ""; $scope.code = "";
            
            for (var i = 0; i < main.allmatches2015.rounds.length; i++) {
                for (var j = 0; j < main.allmatches2015.rounds[i].matches.length; j++) {

                    
                    if (($scope.name.toUpperCase()) == (main.allmatches2015.rounds[i].matches[j].team1.name.toUpperCase())) { //checking whether team  present or not
                        
                        $scope.code = (main.allmatches2015.rounds[i].matches[j].team1.code);
                        ++($scope.count);
                        if ((main.allmatches2015.rounds[i].matches[j].score1) > (main.allmatches2015.rounds[i].matches[j].score2)) {
                            ++($scope.won); //comparing the goals scored
                        }
                       else{
                                 if ((main.allmatches2015.rounds[i].matches[j].score1) == (main.allmatches2015.rounds[i].matches[j].score2)) {
                                   ++($scope.draw); //checking if the goals are equal
                               }
                                 
                                       else
                                {
                                    ++($scope.lost);
                                }
                                
                        
                        }
                        break;

                    } else {
                        if (($scope.name.toUpperCase()) == (main.allmatches2015.rounds[i].matches[j].team2.name.toUpperCase())) { //checking whether team present or not
                           
                           
                            ++($scope.count);
                            $scope.code = (main.allmatches2015.rounds[i].matches[j].team2.code);
                               if ((main.allmatches2015.rounds[i].matches[j].score1) < (main.allmatches2015.rounds[i].matches[j].score2)) {
                                   ++($scope.won); //comparing the goals scored
                               }
                               else{
                                 if ((main.allmatches2015.rounds[i].matches[j].score1) == (main.allmatches2015.rounds[i].matches[j].score2)) {
                                   ++($scope.draw);  //checking if the goals are equal
                               }
                                 
                                       else
                                {
                                    ++($scope.lost);
                                }
                                
                        }
                            break;
                        }
                        
                    }
                }
            }

       
           
           
            if ($scope.count == 0) {
                $scope.error = "team has not participated";
                

            }
            //console.log("Total Matches Played: " + $scope.count);
      

        }
    }

 }]); // end controller