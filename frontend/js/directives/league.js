angular.module('dose')
  .directive('dgPLeague', PLeague);

PLeague.$inject = ['football', '$rootScope'];  
function PLeague(football, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/bpl.html',
    link: function($scope, $elem, attrs) {
      $scope.open = true;


      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'bpl');
      }

      $scope.toggle = function() {
        $scope.open = !$scope.open;
        console.log($scope.open);
      }
      $scope.refresh = function() {
        football.get().then(function(res){
          $scope.$applyAsync(function(){
              $scope.dgData = res.data.standing;
          }); 
        })
      }
      $scope.refresh();
    }
  }

} 