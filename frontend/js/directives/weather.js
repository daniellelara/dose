angular.module('dose')
  .directive('dgWeather', Weather);

function Weather() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<p>weather: {{ dgData.temp }} {{ dgData.description }}</p>'
  }

} 