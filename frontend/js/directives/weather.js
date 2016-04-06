angular.module('dose')
  .directive('dgWeather', Weather);

Weather.$inject=['weather'];
function Weather(weather) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div><img class="icon" src="http://openweathermap.org/img/w/{{ dgData.icon }}.png"><div class="weather"><h3>{{ dgData.temp }}^C</h3><p>{{ dgData.description }}</p><p>{{ dgData.name }}</p></div></div>',
    link: function($scope, $elem, attrs) {

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
  }

} 