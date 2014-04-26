angular
    .module('pizza-shop',
        ['ui.router',
          'WpHome'
        ])

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
            });
    });