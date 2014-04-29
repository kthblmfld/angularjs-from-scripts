storeHours
    .controller('StoreHoursController',
        ['StoreHoursService', '$scope',function(storeHoursService, $scope){

          $scope.storeHours = storeHoursService.storeHours;
    }]);