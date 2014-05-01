var app = angular

    .module('pizza-shop', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', '/home');

        $stateProvider

            .state('home',{
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('storeHours',{
                url:'/storeHours',
                templateUrl: "templates/storeHours.html",
                controller: "StoreHoursController"
            })
            .state('menu',{
                url: '/menu',
                templateUrl: 'templates/menu.html',
                controller: 'MenuController'
            })
            .state('menu.ingredient',{
                url: '/ingredient/:ingredient',
                templateUrl:'templates/ingredients.ingredient.html',
                controller: function($scope, $stateParams){
                    $scope.ingredient = $stateParams.ingredient;
                }
            })
            .state('directions',{
                url: '/directions',
                templateUrl: 'templates/directions.html'
            })
            .state('walt',{
                url: '/walt',
                templateUrl: 'templates/walt/walt.html'
            })
            .state('walt.history',{
                url: '/history',
                templateUrl: 'templates/walt/walt.history.html',
                controller: 'WaltsHistoryController'
            })
            .state('walt.merit',{
                url: '/merit',
                templateUrl: 'templates/walt/walt.merit.html'
            })
            .state('walt.passion',{
                url: '/passion',
                templateUrl: 'templates/walt/walt.passion.html'
            })
            .state('walt.passion.life', {
                url: "/life",
                templateUrl: 'templates/walt/life.html'
            })
            .state('walt.passion.life.list', {
                url: "/list",
                templateUrl: 'templates/walt/life.list.html',
                controller: function($scope) {
                    $scope.items = ["Health", "Money", "Power"];
                }
            })
            .state('walt.passion.death', {
                url: "/death",
                templateUrl: 'templates/walt/death.html'
            })
            .state('walt.passion.death.list', {
                url: "/list",
                templateUrl: 'templates/walt/death.list.html',
                controller: function($scope) {
                    $scope.things = ["Explosive", "Thorough", "Sudden", "Traumatic"];
                }
            });
    });