angular.module('dose')
  .directive('dgChampions', Champions);

Champions.$inject = ['ChampionsLive'];  
function Champions(ChampionsLive) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="row status" ng-repeat="object in dgData"><div class="col-md-3">{{ object.start | date: "dd-mm-yyyy HH:mm" }}</h4></div><div class="col-md-3">{{ object.awayTeam.name }}</div><div class="col-md-1"> {{ object.awayGoals }}</div><div class="col-md-1"> V </div><div class="col-md-1">{{ object.homeGoals }}</div><div class="col-md-3">{{ object.homeTeam.name }}</div></div></div></div>',
    link: function($scope, $elem, attrs) {
      ChampionsLive.get().then(function(res){
        $scope.$applyAsync(function(){
            $scope.dgData = res.data;
            console.log("data", res.data);
        }); 
      })
    }
  }

} 
