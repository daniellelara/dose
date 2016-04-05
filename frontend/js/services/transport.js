angular.module('dose')
  .service('TransportService', Transport);

Transport.$inject = ['Geolocation', '$http']; 
function Transport(Geolocation, $http) {

  return {
    get: function() {
        return $http.get('https://api.tfl.gov.uk/line/mode/tube/status');
      }
    }
  }
