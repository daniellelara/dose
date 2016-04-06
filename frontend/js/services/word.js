angular.module('dose')
  .service('WordService', Word);

Word.$inject = ['$http']; 

function Word($http) {

  return {
    get: function() {
      
        return $http.get('http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
      }
    }
  }
