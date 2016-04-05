angular.module('dose')
  .directive('dgPLeague', PLeague);
  
function PLeague() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<table><tr><th>#</th><th>team</th><th>GP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th></tr><tr ng-repeat="object in dgData"><td>{{ object.position }}</td><td><img class="crest" src="{{ object.crestURI }}"><p>{{ object.teamName }}</p></td><td>{{ object.playedGames}}</td><td>{{ object.wins }}</td><td>{{ object.draws }}</td><td>{{ object.losses }}</td><td>{{ object.goals }}</td><td>{{ object.goalsAgainst }}</td><td>{{ object.goalDifference }}</td><td>{{ object.points}}</td></tr></table>'
  }

} 