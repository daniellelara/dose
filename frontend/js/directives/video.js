angular.module('dose')
  .directive('dgVideo', Video);

Video.$inject = ['$sce'];

function Video($sce) {
    return {
      restrict: 'C',
      scope: { dgData:'=' },
      replace: true,
      template: '<iframe width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
      link: function (scope) {
          scope.$watch('dgData', function (newVal) {
             if (newVal) {
                 scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + newVal + "?showinfo=0&controls=0");
              }
          });
      }
    };
  }
