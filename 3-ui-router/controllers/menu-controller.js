/*
 Since a controller needs to be assigned to a module, and we know app is a module at this point,
 we assign this controller to app. If we were to assign it to angular without a module, problems
 would ensue.
 */
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
})