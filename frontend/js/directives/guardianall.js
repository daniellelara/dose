angular.module('dose')
  .directive('dgGAll', GAll);
  
function GAll() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="row status reel" ng-repeat="object in dgData"><div class="col-md-6"><img class="news" src="{{ object.fields.thumbnail }}"></div><div class="col-md-6"><a href="{{ object.webUrl }}" target="_blank"><p class="gtitle">{{ object.webTitle  }}</p></a></div></div></div></div>'
  }

} 