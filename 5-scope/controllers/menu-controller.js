app
    .controller('MenuController', function($scope){

        $scope.pizzas = [
            {
                name: "Meat Lover's",
                ingredients: ['Sausage','Pepperoni','Bacon','Olives'],
                price: 12
            },
            {
                name: 'Hawaiian',
                ingredients: ['Canadian Bacon','Pineapple'],
                price: 10
            },
            {
                name: 'Vegetarian',
                ingredients: ['Mushrooms','Olives','Green Peppers'],
                price: 11
            }
        ];
});