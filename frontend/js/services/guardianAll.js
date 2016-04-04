angular.module('dose')
  .service('GAll', GAll);

Gnews.$inject = ['$http']; 
function GAll($http) {

  return {
    get: function() {
        return $http.get('https://content.guardianapis.com/search?q=uk-news&api-key=30eda316-ca9f-432b-871b-61491fb4ad4e&show-fields=thumbnail');
      }
    }
  }