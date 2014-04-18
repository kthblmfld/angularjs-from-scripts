app
    .config(function config($stateProvider, $urlRouterProvider){

        var PATH_TPL = 'templates/walt/';

        // For any unmatched url, redirect to /life
        $urlRouterProvider.otherwise("/life");

        $stateProvider

            .state('walt',{
                url: '/walt',
                templateUrl: PATH_TPL + 'walt.html'
            })
            .state('walt.history',{
                url: '/history',
                templateUrl: PATH_TPL + 'walt.history.html',
                controller: 'WaltsHistoryController'
            })
            .state('walt.merit',{
                url: '/merit',
                templateUrl: PATH_TPL + 'walt.merit.html'
            })
            .state('walt.passion',{
                url: '/passion',
                templateUrl: PATH_TPL + 'walt.passion.html'
            })
            .state('walt.passion.life', {
                url: "/life",
                templateUrl: PATH_TPL + "life.html"
            })
            .state('walt.passion.life.list', {
                url: "/list",
                templateUrl: PATH_TPL + "life.list.html",
                controller: function($scope) {
                    $scope.items = ["Health", "Money", "Power"];
                }
            })
            .state('walt.passion.death', {
                url: "/death",
                templateUrl: PATH_TPL + "death.html"
            })
            .state('walt.passion.death.list', {
                url: "/list",
                templateUrl: PATH_TPL + "death.list.html",
                controller: function($scope) {
                    $scope.things = ["Explosive", "Thorough", "Sudden", "Traumatic"];
                }
            });
    })
    .controller('WaltsHistoryController', function($scope, $rootScope){

        $scope.history = {

            title: "Walt's History",
            summary: "Walter was once a promising chemist and among the founders of the multi-billion "
              + "dollar company Gray Matter Technologies, but he soon left, selling his shares for $5,000 "
              + "for personal reasons and becoming an unhappy and disillusioned high school chemistry teacher. "
              + "After being diagnosed with Stage IIIA lung cancer, he resorted to manufacturing high-purity "
              + "pizza to ensure his family's financial security after his death."
        }

        $rootScope.waltsHomeTown = 'Oakland, CA';
    })
    .controller('OpinionController', ['$scope','sharedThoughtService', function($scope, sharedThoughtService){

        $scope.handleFeedback = function(msg){

            sharedThoughtService.prepareBroadcast(msg);
        };

        $scope.$on('handleBroadcast', function(){
            $scope.customerFeedback = sharedThoughtService.customerFeedback;
        });
    }])
    .controller('JudgementController', ['$scope','sharedThoughtService', function($scope, sharedThoughtService){
        $scope.$on('handleBroadcast', function(){
            $scope.customerFeedback = 'Judge says:' + sharedThoughtService.customerFeedback;
        });
    }])
    .controller('BeliefController', ['$scope','sharedThoughtService', function($scope, sharedThoughtService){
        $scope.$on('handleBroadcast', function(){
            $scope.customerFeedback = 'Belief says: ' + sharedThoughtService.customerFeedback;
        });
    }])
    .factory('sharedThoughtService', ['$rootScope', function($rootScope){

        var sharedThought = {};
        sharedThought.customerFeedback = '';

        sharedThought.prepareBroadcast = function(msg){

            if(typeof msg != 'undefined'){
                this.customerFeedback = msg;
                this.broadcastMessage();
            }
        };

        sharedThought.broadcastMessage = function(){
            $rootScope.$broadcast('handleBroadcast');
        };

        return sharedThought;

    }]);;