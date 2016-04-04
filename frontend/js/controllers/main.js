angular
  .module('dose')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', 'tokenService', '$http', 'API'];
function MainController($auth, tokenService, $http, API) {

  var self = this;


  this.isLoggedIn = function() {
    
    return !!tokenService.getToken();
  }
  
  
  
  //for tools
  
  this.currentUser = tokenService.getUser();
  this.tools = null;
  

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

  //add a tool to dashboard function
  this.addTool = function(tool) {
    $http.patch(API + '/' + self.currentUser._id, { tools: tool })
      .then(function(res) {
        var tools = self.currentUser.tools
        tools.push(tool);
        console.log($('#'+ tool))
        $('#'+ tool).addClass('fadeOut');
        console.log($('#'+ tool))
      });
  }

  //deleteTool to dashboard function
  this.deleteTool = function(tool) {
    console.log("i have been clicked", tool);
    $http.patch(API + '/' + self.currentUser._id + '/tool', { tools: tool})
      .then(function(res) {
        console.log(res);
        var tools = self.currentUser.tools
        var index = tools.indexOf(tool);
        tools.splice(index, 1);
      });
  }

  //function match user tool to tool
  this.hasTool = function(word) {
    var tools = self.currentUser.tools;
    return (tools.indexOf(word) > -1);
  }

  this.setOpacity = function(){
    document.getElementById("board").style.opacity = 0.2; //pure JS
  }
  this.deleteOpacity = function(){
    document.getElementById("board").style.opacity = 1; //pure JS
  }

  this.backgroundChange = function(word) {
    console.log(word);
    if (word == "sun") {
      document.body.style.backgroundImage = "url('/images/sun.jpg')";
      document.body.style.backgroundSize = "cover";

    }
    else if (word == "forest") {
      document.body.style.backgroundImage = "url('/images/forest.jpg')";
      document.body.style.backgroundSize = "cover";
    }
    else if (word == "forestTwo") {
      document.body.style.backgroundImage = "url('/images/forest2.jpg')";
      document.body.style.backgroundSize = "cover";
    }
    else if (word == "night sky") {
      document.body.style.backgroundImage = "url('/images/nightsky.jpg')";
      document.body.style.backgroundSize = "cover";
    }
  }

}