var app = angular
    .module('pizza-shop',
        ['ui.router',
          'wp.home',
          'wp.directions'
        ])

    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', '/home');

        $stateProvider

            .state('home',{
                url: '/home',
                templateUrl: 'home/home.html'
            })
            .state('storeHours',{
                url:'/storeHours',
                templateUrl: "storeHours/store-hours.html",
                controller: "StoreHoursController"
            })
            .state('menu',{
                url: '/menu',
                templateUrl: 'menu/menu.html',
                controller: 'MenuController'
            })
            .state('menu.ingredient',{
                url: '/ingredient/:ingredient',
                templateUrl:'menu/ingredients.ingredient.html',
                controller: function($scope, $stateParams){
                    $scope.ingredient = $stateParams.ingredient;
                }
            });
    });