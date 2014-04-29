var storeHours = angular
    .module('wp.storeHours',['ui.router'])
    .config(function($stateProvider){

        $stateProvider

            .state('storeHours',{
                url:'/storeHours',
                templateUrl: "storeHours/store-hours.html",
                controller: "StoreHoursController"
            })
    })
    .factory('StoreHoursService', function(){

            var hours = {};

            hours.storeHours = [
                {
                    day: 'Monday',
                    open: '7a',
                    close:'7p'
                },
                {
                    day: 'Tuesday',
                    open: '7a',
                    close: '8p'
                },
                {
                    day: 'Wednesday',
                    open: '7a',
                    close: '8p'
                },
                {
                    day: 'Thursday',
                    open: '7a',
                    close: '8p'
                },
                {
                    day: 'Friday',
                    open: '7a',
                    close: '9p'
                },
                {
                    day: 'Saturday',
                    open: '8a',
                    close: '10p'
                },
                {
                    day: 'Sunday',
                    open: '8a',
                    close: '9p'
                }
            ];

            return hours;
    })
    ;