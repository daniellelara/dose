angular
  .module('dose')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', 'tokenService', '$http', 'API'];
function MainController($auth, tokenService, $http, API) {

  var self = this;

  this.isLoggedIn = function() {
    return !!tokenService.getToken();
  }

  this.currentUser = tokenService.getUser();

  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        self.currentUser = tokenService.getUser();
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }

  this.addTool = function(tool) {
    $http.patch(API + '/' + self.currentUser._id, tool)
         .then(function(res) {
            console.log(tool);
          });
  }
  this.deleteTool = function(tool) {
    $http.delete(API + '/' + self.currentUser._id, tool)
         .then(function(res) {
            console.log(tool);
          });
  }

}