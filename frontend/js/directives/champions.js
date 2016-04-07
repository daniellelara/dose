angular.module('dose')
  .directive('dgChampions', Champions);

Champions.$inject = ['ChampionsLive', '$rootScope'];  
function Champions(ChampionsLive, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/champions.html',
    link: function($scope, $elem, attrs) {
      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'champions');
      }

      $scope.refresh = function() {
        ChampionsLive.get().then(function(res){
          $scope.$applyAsync(function(){
              $scope.dgData = res.data;
              console.log("data", res.data);
          }); 
        })
      }
      $scope.refresh();  
    }
  }

} 
