angular.module('dose')
  .directive('dgGSport', GSport);

GSport.$inject = ['GNews', '$rootScope'] ; 
function GSport(GNews, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/sportnews.html',
    link: function($scope, $elem, attrs) {
      $scope.open = true;


      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'Sport');
      }

      $scope.toggle = function() {
        $scope.open = !$scope.open;
        console.log($scope.open);
      }
      $scope.refresh = function() {
        console.log("working");
      GNews.get().then(function(res){
        $scope.$applyAsync(function(){
            $scope.dgData = res.data.response.results;
        }); 
      })
    }
   $scope.refresh();
      }
    }

  } 