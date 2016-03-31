angular.module('dose')
  .directive('dgTransport', Transport);
  
function Transport() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<p>status: {{ dgData }}</p>'
  }

} 