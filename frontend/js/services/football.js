angular.module('dose')
  .service('football', football);

football.$inject = ['$http']; 
function football($http) {
 return {
  get: function() {
    return $http({
      method: "GET",
      url: 'http://api.football-data.org/v1/soccerseasons/398/leagueTable',
      headers: { 'X-Auth-Token': '3e6670b0d24b449ba4fe4f751668f5e9' }
    });
  }
}
 

}


