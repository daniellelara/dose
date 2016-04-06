angular.module('dose')
  .service('toolService', toolService);

toolService.$inject = ['$window'];
function toolService($window) {

  var tools = angular.fromJson($window.localStorage.getItem('tools')) || [];
  
 
 return { 

    getTools: function() {
      return tools;
    },

    remove: function() {
      $window.localStorage.removeItem('tools');
    },

    addTool: function(tool) {
      tools.push(tool);
      $window.localStorage.setItem('tools', angular.toJson(tools, 'pretty'));
    
  },
     deleteTool: function(tool) {
      console.log("before", tools)
      var index = tools.indexOf(tool);
      console.log(index);
      tools.splice(index, 1);
      console.log("tools after splice", tools)
      $window.localStorage.setItem('tools', angular.toJson(tools, 'pretty'));

  }
  }
}