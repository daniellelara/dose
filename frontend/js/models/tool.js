angular
  .module('dose')
  .factory('Tool', Tool);

Tool.$inject = ['$resource', 'API'];
function Tool($resource, API) {
  var tool = $resource(API, { id:  self.currentUser._id }, {
    update: { method: "PATCH" }
  });

  return tool;
}
