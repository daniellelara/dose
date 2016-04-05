angular.module('dose')
  .service('quote', quote);

quote.$inject = ['$http']; 
function quote($http) {

  return {
    get: function() {
        return $http.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en');
      }
  }
}