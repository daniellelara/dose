angular.module('dose')
  .directive('dgWord', Word);
  
function Word() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<p>word: {{ dgData.word }} | {{ dgData.note }}</p>'
  }

} 