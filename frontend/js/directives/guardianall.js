angular.module('dose')
  .directive('dgGAll', GAll);

GAll.$inject =['GallService'];
function GAll(GallService) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="row status reel" ng-repeat="object in dgData"><div class="col-md-6"><img class="news" src="{{ object.fields.thumbnail }}"></div><div class="col-md-6"><a href="{{ object.webUrl }}" target="_blank"><p class="gtitle">{{ object.webTitle  }}</p></a></div></div></div></div>',
    link: function($scope, $elem, attrs) {

      GallService.get().then(function(res){
        $scope.$applyAsync(function(){
          $scope.dgData = res.data.response.results;
          console.log(res.data.response.results);
        }); 
      })
    }
  }

} 