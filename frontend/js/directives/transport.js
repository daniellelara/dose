angular.module('dose')
  .directive('dgTransport', Transport);

Transport.$inject = ['TransportService', '$rootScope']
function Transport(TransportService, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/tfl.html',
    link: function($scope, $elem, attrs) {
      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'Tfl');
      }

      $scope.refresh = function() {
        TransportService.get().then(function(res){
          $scope.$applyAsync(function(){
            $scope.dgData = {
              bakerloo: res.data[0].lineStatuses[0].statusSeverityDescription,
              central: res.data[1].lineStatuses[0].statusSeverityDescription,
              district: res.data[3].lineStatuses[0].statusSeverityDescription,
              hammersmith: res.data[4].lineStatuses[0].statusSeverityDescription,
              jubilee: res.data[5].lineStatuses[0].statusSeverityDescription,
              northern: res.data[7].lineStatuses[0].statusSeverityDescription,
              picadilly: res.data[8].lineStatuses[0].statusSeverityDescription
            }
          });
        })
      }
      $scope.refresh();
    }
  }

} 