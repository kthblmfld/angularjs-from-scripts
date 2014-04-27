angular
    .module('wp.directions',['ui.router'])
    .config(function config($stateProvider){
        $stateProvider
            .state('directions',{
                url: '/directions',
                templateUrl: 'directions/directions.html'
            });
    });