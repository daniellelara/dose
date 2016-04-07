angular.module('dose')
  .directive('dgGAll', GAll);

GAll.$inject =['GallService', '$rootScope'];
function GAll(GallService, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/allnews.html',
    link: function($scope, $elem, attrs) {
      $scope.open = true;


      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'allNews');
      }

      $scope.toggle = function() {
        $scope.open = !$scope.open;
        console.log($scope.open);
      }
      $scope.refresh = function() {
        console.log("working");
        GallService.get().then(function(res){
          $scope.$applyAsync(function(){
            $scope.dgData = res.data.response.results;
            console.log(res.data.response.results);
          }); 
        })
      } 
      $scope.refresh();
    }
  }

} 