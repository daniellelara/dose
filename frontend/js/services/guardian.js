angular.module('dose')
  .service('GNews', Gnews);

Gnews.$inject = ['$http']; 
function Gnews($http) {

  return {
    get: function() {
        return $http.get('https://content.guardianapis.com/search?q=sport&api-key=30eda316-ca9f-432b-871b-61491fb4ad4e&show-fields=thumbnail');
      }
    }
  }
