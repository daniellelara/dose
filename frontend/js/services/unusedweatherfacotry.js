angular.module('dose')
  .factory('openWeather', OpenWeather);

OpenWeather.$inject = ['$resource']; 

 function OpenWeather($resource) {

    // API key is currently unused (work either with or without key)
    var apiKey = 'b3f62dea71402f841a5701aacfc7f26e';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';
      

    return $resource(apiBaseUrl + ':path/:subPath?lat=:lat&lon=:lon',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      }
    )
  };