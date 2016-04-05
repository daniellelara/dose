angular.module('dose')
  .service('Scores', Scores);

Scores.$inject = ['$http']; 
function Scores($http) {

  return {
    get: function() {
        return $http.get('https://api.crowdscores.com/api/v1/matches', {
          params:{ 
            'api_key': '089bcef96b004975805f1c91dcd82538',
            'from': '2016-04-05T12:00:00-03:00',
            'to' : '2016-04-11T12:00:00-04:00'

             }
        });
      }
    }
  }