angular.module('dose')
  .controller('UserController', UserController);

UserController.$inject = ['weather2', '$window', '$scope', 'Transport'];

function UserController(weather2, $window, $scope, Transport) {
  var socket = $window.io("http://localhost:3000");
  console.log(socket);

  socket.on('connect', function() {
    console.log("CONNECTED!");
  });

  var self = this;

  this.lat = 0;
  this.lon = 0;
  this.temperature = 2;
  this.status = null
  
  Transport.get().then(function(res){
  $scope.$applyAsync(function(){
    self.status = res.data[1].lineStatuses[0].statusSeverityDescription
    console.log(self.status);
    });
  })

  weather2.get().then(function(res) {
    $scope.$applyAsync(function(){
      self.temperature = res.data.list[0].temp.day;
    });
  });

 // socket.on('temperature', function(temperature){
 //   $scope.$applyAsync(function(){
 //     self.temperature = temperature;
 //   })
   
 // })
}
