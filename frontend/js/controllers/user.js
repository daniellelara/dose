angular.module('dose')
  .controller('UserController', UserController);

UserController.$inject = ['weather', '$window', '$scope', 'Transport', 'Word', 'Video'];

function UserController(weather, $window, $scope, Transport, Word, Video) {
  var socket = $window.io("http://localhost:3000");
  console.log(socket);

  socket.on('connect', function() {
    console.log("CONNECTED!");
  });

  var self = this;

  //for geolocation
  this.lat = 0;
  this.lon = 0;
  //for weather
  this.temperature = {};
  //for tfl
  this.status = null;
  //for wod of the day
  this.word = null;
  //ted video
  this.video = null;

  // youtube ted channel call
  Video.get().then(function(res){
    $scope.$applyAsync(function(){
      self.video = res.data.items[0].id.videoId;
      console.log(self.video);
    });
  })

  // line status call
  Transport.get().then(function(res){
  $scope.$applyAsync(function(){
    self.status = res.data[1].lineStatuses[0].statusSeverityDescription
    console.log(self.status);
    });
  })  

 //word of the day
  Word.get().then(function(res){
    $scope.$applyAsync(function(){
      self.word = res.data;
    });
  })

  //weather call 
  weather.get().then(function(res) {
    $scope.$applyAsync(function(){
      self.temperature = {
        temp: res.temp.day,
        description: res.weather[0].description,
        icon: res.weather[0].icon
      }
    });
  });

 // socket.on('temperature', function(temperature){
 //   $scope.$applyAsync(function(){
 //     self.temperature = temperature;
 //   })
   
 // })
}
