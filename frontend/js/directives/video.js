angular.module('dose')
  .directive('dgVideo', Video);

Video.$inject = ['$sce'];

function Video($sce) {
    return {
      restrict: 'C',
          scope: { dgData:'=' },
      replace: true,
      template: '<div style="height:300px;"><iframe width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
      link: function (scope) {
          scope.$watch('dgData', function (newVal) {
             if (newVal) {
                 scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + newVal + "?autoplay=1&showinfo=0&controls=0");
             }
          });
      }
    };
  }
