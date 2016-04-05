angular.module('dose')
  .directive('dgPLeague', PLeague);
  
function PLeague() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<table style="width:100%"><tr><th>#</th><th>team</th><th>GP</th><th>W</th><th>D</th><th>L</th><th>GF</th><th>GA</th><th>GD</th><th>Pts</th></tr><tr ng-repeat="object in dgData"><td>{{ object.position }}</td><td><img class="crest" src="{{ object.crestURI }}"><p>{{ object.teamName }}</p></td><td>{{ object.playedGames}}</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></table>'
  }

} 