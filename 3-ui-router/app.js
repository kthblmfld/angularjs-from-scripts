var app = angular

    .module('pizza-shop', ['ui.router'])

    .config(function($stateProvider){

        $stateProvider

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
    });