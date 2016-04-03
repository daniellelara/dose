angular.module('dose')
  .directive('dgNote', Note);
  
function Transport() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template:'<form ng-submit="user.sendNote()" class="form-inline"><div class="form-group"><input ng-model="main.note" class="form-control"></div><button class="btn btn-primary">Send</button></form>'
  }
}  