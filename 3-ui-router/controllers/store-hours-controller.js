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