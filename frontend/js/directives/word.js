angular.module('dose')
  .directive('dgWord', Word);
  
function Word() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="container"><h1>{{ dgData.word }} </h1> <p>note: {{ dgData.note }}</p><p>defintion: {{ dgData.definitions[0].text }}</p></div>'
  }

} 