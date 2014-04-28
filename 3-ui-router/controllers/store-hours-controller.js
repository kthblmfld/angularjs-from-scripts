/*
  Since a controller needs to be assigned to a module, and we know app is a module at this point,
  we assign this controller to app. If we were to assign it to angular without a module, problems
  would ensue.
 */
app
    .controller('StoreHoursController', function($scope){

    $scope.storeHours = [
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
});