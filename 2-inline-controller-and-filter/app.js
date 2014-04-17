var app = angular.module('pizza-shop', []);

app.controller('HomeController', function($scope){

    $scope.pizzas = [
        {
            name: "Meat Lover's",
            ingredients: ['Sausage','Pepperoni','Bacon','Olives'],
            price: 6
        },
        {
            name: 'Hawaiian',
            ingredients: ['Canadian bacon','Pineapple'],
            price: 5
        },
        {
            name: 'Vegetarian',
            ingredients: ['Mushrooms','Olives','Green Peppers'],
            price: 6
        }
    ];
});