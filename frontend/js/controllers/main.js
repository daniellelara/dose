angular
  .module('dose')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', 'tokenService', '$http', 'API', '$window', 'toolService', 'Upload', 'S3', '$scope'];
function MainController($auth, tokenService, $http, API, $window, toolService, Upload, S3, $scope) {

  var self = this;


  this.isLoggedIn = function() {
    
    return !!tokenService.getToken();
  }
  
  
  this.currentUser = tokenService.getUser();
  this.tools = toolService.getTools();
  

  

  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        self.currentUser = tokenService.getUser();
        self.tools = self.currentUser.tools
        $window.localStorage.setItem('tools', angular.toJson(self.tools, 'pretty'));
       
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    toolService.removeTools();
    this.currentUser = null;
  }

  


  //add a tool to dashboard function
  this.addTool = function(tool) {
    $http.patch(API + '/' + self.currentUser._id, { tools: tool })
      .then(function(res) {
        toolService.addTool(tool);
        $('#'+ tool).addClass('fadeOut');
      });
  }

  //deleteTool to dashboard function
  this.deleteTool = function(tool) {
    console.log("i have been clicked", tool);
    $http.patch(API + '/' + self.currentUser._id + '/tool', { tools: tool})
      .then(function(res) {
        toolService.deleteTool(tool);
      });
  }

  $scope.$on('removeTool', function(event, tool) {
    $http.patch(API + '/' + self.currentUser._id + '/tool', { tools: tool})
      .then(function(res) {
        toolService.deleteTool(tool);
      });
  });

  //function match user tool to tool
  this.hasTool = function(word) {
    if(self.currentUser) {
      var tools = toolService.getTools();
      return (tools.indexOf(word) > -1);
    } else {
      return false;
    }
  }

  self.addPhoto = function(image) {
    console.log("working it");
    console.log(image);
    Upload.upload({
      url: API + '/'+ self.currentUser._id +'/image',
      data: {file: image},
      method: 'PUT'
    }).then(function(res){
      self.image = res.data.wallpaper;
      self.myImage = S3 + self.image;
      console.log("it worked", res);
    })

  }
this.image = null;
  self.getImage = function() {
    $http.get(API + '/'+ self.currentUser._id ).then(function(res){
      self.image = res.data.wallpaper;
      self.myImage = S3 + self.image;
      console.log(self.myImage);
    })
  }
  // self.getImage();

  this.class = "cont-news";
  this.icon = 'fa fa-arrow-up';
   
  this.collapse = function() {
    if (self.class === "cont-news"){
          self.class = "collapse";
          self.icon = 'fa fa-arrow-down';
        }
        else{
          self.class = "cont-news";
          self.icon = 'fa fa-arrow-up';
        }
    
  }

  this.text = function(tool) {
   document.getElementById(tool).style.opacity = 1;
  } 

  this.textLeave = function(tool) {
   document.getElementById(tool).style.opacity = 0;
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
    else if (word == "mine") {
      document.body.style.backgroundImage = "url(" + self.myImage +")";
      document.body.style.backgroundSize = "cover";
    }
  }

}