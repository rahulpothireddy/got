// var myApp = angular.module('eplApp',['ngRoute']);

// Match Controller starts
  
    myApp.controller("MatchSummary", ['$http','$routeParams',function($http,$routeParams){ // routeparams for routing over  



        var main = this ; //without scope

        this.rounds2015 = [];
        this.TeamCode1 = $routeParams.code1 ;
        this.TeamCode2 = $routeParams.code2 ;
        this.MatchDate = $routeParams.matchDate ;
        this.Date; this.Day; this.Team1; this.Team2; this.Score1; this.Score2; this.Code1; this.Code2; this.Won; //initalising all the objects
        

        this.baseUrl = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
     

       this.singlematchstats = function(match){
       
        console.log(match);
        
        main.rounds2015 = match.rounds;

   

    for (var i in main.rounds2015){


       for (var j in main.rounds2015[i].matches){

         

        if ((main.rounds2015[i].matches[j].team1.code == main.TeamCode1) && (main.rounds2015[i].matches[j].team2.code == main.TeamCode2) && (main.rounds2015[i].matches[j].date == main.MatchDate))

          {
            main.Day = main.rounds2015[i].name;
            main.matches2015 = main.rounds2015[i].matches[j];
            main.Date = main.matches2015.date;       main.Team1 = main.matches2015.team1.name; main.Team2 = main.matches2015.team2.name;  main.Score1 =main.matches2015.score1;
            main.Score2 = main.matches2015.score2;   main.Code1 = main.matches2015.team1.code; main.Code2 = main.matches2015.team2.code;
                     

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

            }]); // matchsummary controller ends

