
//var myApp = angular.module('eplApp', ['ngRoute']); 

'use strict';

myApp.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
    .when('/',{
        template: '<h2 style="text-align:center;color:red;">Click on the button to load all matches</h2>'
    })
        
        

       .when('/matches', {
            
            templateUrl: 'views/2015eplmatches.html', //first template to be loaded.
            controller: 'Controller2015',
            controllerAs: 'epl1'
        })

        .when('/2015Matches', {
            
            templateUrl: 'views/2015eplmatches.html', //location of template to be loaded.
            controller: 'Controller2015',             //controller to be used.
            controllerAs: 'epl1'                      //controller name for convenience.

        })
        .when('/2016Matches', {
            

            templateUrl: 'views/2016eplmatches.html', //location of template to be loaded.
            controller: 'Controller2016',             //controller to be used.
            controllerAs: 'epl2'                      //controller name for convenience.

        })
        

          .when("/matches/:code1/:code2/:matchDate",{   //template for particular match summary(2015/16) by passing team1code,team2code,match date
              templateUrl : "views/match-summary.html",
              controller : "MatchSummary",
              controllerAs : "matchsum"
            })
        
       .when("/2016Matches/:code1/:code2/:matchDate",{       //template for particular match summary(2016/17) by passing team1code,team2code,match date
              templateUrl : "views/match-summary2.html", 
              controller : "MatchSummary2",
              controllerAs : "matchsum2"
            })

       .when('/viewTeam', {                                 //template for viewing team performance
            templateUrl: 'views/viewteam.html',
            controller: 'ViewController2015',
            controllerAs: 'eplteamview1'
        })         
       

        .when('/Matches2015', {                          //template for viewing team performance(2015/16)
            templateUrl: 'views/viewteam.html',
            controller: 'ViewController2015',
            controllerAs: 'eplteamview1'
        })
     .when('/Matches2016', {                             //template for viewing team performance(2016/17)
            templateUrl: 'views/viewteam2.html',
            controller: 'ViewController2017',
            controllerAs: 'eplteamview2'
        })
        .otherwise({
            template: '<h2 style="color:white;text-align:center;">Error :404 page not found it is not a number its something....</h2>' //when template not found....
        });
}]);
