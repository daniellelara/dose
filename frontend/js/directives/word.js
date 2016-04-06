angular.module('dose')
  .directive('dgWord', Word);
Word.$inject = ['WordService']  
function Word(WordService) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="container info"><h1>{{ dgData.word }} </h1> <p>note: {{ dgData.note }}</p><p>defintion: {{ dgData.definitions[0].text }}</p></div>',
    link: function($scope, $elem, attrs) {

      WordService.get().then(function(res){
        $scope.$applyAsync(function(){
          $scope.dgData = res.data;
        }); 
      })
    }
  }

} 