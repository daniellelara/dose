angular.module('dose')
  .directive('dgWeather', Weather);

function Weather() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="container"><img class="icon" src="http://openweathermap.org/img/w/{{ dgData.icon }}.png"><h3>{{ dgData.temp }}.C</h3><p>{{ dgData.description }}</p><p>{{ dgData.name }}</p></div>'
  }

} 