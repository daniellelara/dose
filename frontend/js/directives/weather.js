angular.module('dose')
  .directive('dgWeather', Weather);

Weather.$inject=['weather', '$rootScope'];
function Weather(weather, $rootScope) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    templateUrl: '/js/directives/partials/weather.html',
    link: function($scope, $elem, attrs) {
      $scope.remove = function() {
        $rootScope.$broadcast('removeTool', 'Weather');
      }

      $scope.refresh = function() {
        weather.get().then(function(res){
          $scope.$applyAsync(function(){
            $scope.dgData = {
            temp: res.list[0].temp.day,
            description: res.list[0].weather[0].description,
            icon: res.list[0].weather[0].icon,
            name: res.city.name
            }
          }); 
        })
      }
      $scope.refresh();  
    }
  }

} 