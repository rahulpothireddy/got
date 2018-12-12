// var myApp = angular.module('eplApp',['ngRoute']);

// Matchsummary2 Controller starts
  
    myApp.controller("MatchSummary2", ['$http','$routeParams',function($http,$routeParams){



        var main = this ;

        this.rounds2016 = []; //without scope
        this.TeamCode1 = $routeParams.code1 ;
        this.TeamCode2 = $routeParams.code2 ;
        this.MatchDate = $routeParams.matchDate ;
        this.Date; this.Day; this.Team1; this.Team2; this.Score1; this.Score2; this.Code1; this.Code2; this.Won;  //initalising all the objects
         

        this.baseUrl = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
     

       this.singlematchstats = function(data){
       
        console.log(data);
        
        main.rounds2016 = data.rounds;

   

    for (var i in main.rounds2016){


       for (var j in main.rounds2016[i].matches){

         

        if ((main.rounds2016[i].matches[j].team1.code == main.TeamCode1) && (main.rounds2016[i].matches[j].team2.code == main.TeamCode2) && (main.rounds2016[i].matches[j].date == main.MatchDate))

          {
            main.Day = main.rounds2016[i].name;
            main.matches2016 = main.rounds2016[i].matches[j];
            main.Date = main.matches2016.date;       main.Team1 = main.matches2016.team1.name; main.Team2 = main.matches2016.team2.name;  main.Score1 =main.matches2016.score1;
            main.Score2 = main.matches2016.score2;   main.Code1 = main.matches2016.team1.code; main.Code2 = main.matches2016.team2.code;
                     

                 if (main.Score1 > main.Score2) //comparing goals scored by teams.
                 {
                    main.Won =  " " +main.Team1+ " won by " + (main.Score1 - main.Score2) + " goal(s) "; 
                  }
                 else if (main.Score1 < main.Score2)
                 {
                 main.Won = " "+main.Team2+" won by " + (main.Score2 - main.Score1) + " goal(s) ";
                 }
                       
                     else {
                         main.Won = "Match has ended in draw" ;

                        } 
                }
              }
             }
            } 

         this.loadMatches = function(){

              $http({
                method:"GET",
                url:main.baseUrl
              }).then(function successCallback(response)
              {

                main.singlematchstats(response.data);
              
              }, function errorCallback(response)
              {
              
              alert("please check your console");
              
              })
            }

            this.loadMatches() // calling loadMatches method


            }]); // matchsummary2 controller ends

