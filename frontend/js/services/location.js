angular.module('dose')
  .service('Geolocation', Geolocation);

   
Geolocation.$inject = ['$window'];   
function Geolocation($window) {
  var Promise = $window.Promise;

  var position = null;

  var positionPromise = new Promise(function(resolve, reject) {
    if(position) return resolve(position);

    $window.navigator.geolocation.getCurrentPosition(function(pos) {
      position = pos;
      resolve(position);
    }, function(err) {
      reject(err);
    });
  });

  setInterval(function() {
    $window.navigator.geolocation.getCurrentPosition(function(pos) {
      position = pos;
    });
  }, 10000);

  
  return {
    get: function() {
      return positionPromise;
    }
  }
}  



