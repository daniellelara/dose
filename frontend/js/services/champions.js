angular.module('dose')
  .service('ChampionsLive', Champions);

Champions.$inject = ['$http']; 
function Champions($http) {

  return {
    get: function() {
      var date = new Date;
      var time = date.toISOString()
        return $http.get('https://api.crowdscores.com/api/v1/matches', {
          params:{ 
            'api_key': '089bcef96b004975805f1c91dcd82538',
            'from': time,
            'competition_id': '36'


             }
        });
      }
    }
  }