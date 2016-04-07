
angular.module('dose')
  .directive('dgScores', Scores);

Scores.$inject = ['ScoresLive', '$rootScope'];  
function Scores(ScoresLive, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/score.html',
    link: function($scope, $elem, attrs) {
      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'scores');
      }

  
      $scope.refresh = function() {
      ScoresLive.get().then(function(res){
        $scope.$applyAsync(function(){
            $scope.dgData = res.data;
            console.log(res.data);
        }); 
      })
    }
    $scope.refresh();
    }
  }

} 

