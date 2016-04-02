angular.module('dose')
  .service('weather', Weather);

Weather.$inject = ['Geolocation', '$http'];
function Weather(Geolocation, $http) {
  return {
    get: function() {
      return Geolocation.get().then(function(pos) {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;

        return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lng + '&APPID=b3f62dea71402f841a5701aacfc7f26e&units=metric');
      }).then(function(res) {
        return res.data;
      });
    }
  };
};