
angular.module('dose')
  .directive('dgScores', Scores);
  
function Scores() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="row status reel" ng-repeat="object in dgData"><div class="col-md-6"><img class="news" src="{{ object.awayTeam.badgeUrl }}">{{ object.awayTeam.name }} {{ object.awayGoals }}</div><div class="col-md-6"><img class="news" src="{{ object.homeTeam.badgeUrl }}">{{ object.homeTeam.name }} {{ object.homeGoals }}</div></div></div></div>'
  }

} 