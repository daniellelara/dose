angular.module('dose')
  .service('GallService', GallService);

GallService.$inject = ['$http']; 
function GallService($http) {


  return {
    get: function() {
        var date = new Date;
        var time = date.toISOString().slice(0,10);
        return $http.get('https://content.guardianapis.com/search?q=uk-news&from-date='+time + '&api-key=30eda316-ca9f-432b-871b-61491fb4ad4e&show-fields=thumbnail');
      }
    }
  }