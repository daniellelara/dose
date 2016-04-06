angular.module('dose')
  .controller('UserController', UserController);

UserController.$inject = ['weather', '$window', '$scope', 'TransportService', 'WordService', 'Video', 'tokenService', 'GNews', 'GallService', 'football', 'quote', 'ScoresLive', 'ChampionsLive'];

function UserController(weather, $window, $scope, TransportService, WordService, Video, tokenService, GNews, GallService, football, quote, ScoresLive, ChampionsLive) {
  var socket = $window.io("http://localhost:3000");

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
  //notes
  self.notes =[];
  self.note = null;
  //get current user
  this.user = tokenService.getUser();



  //guardian sport
  this.sport = {};
  this.allNews = {};
  this.tables = null;
  this.scores = null;
  this.scoresC = null;


  // youtube ted channel call
  this.ted = function() {
    Video.get().then(function(res){
      $scope.$applyAsync(function(){
        self.video = res.data.items[0].id.videoId;
        console.log(self.video);
      });
    })
  }   

  // line status call
  this.tfl = function() {
    TransportService.get().then(function(res){
      $scope.$applyAsync(function(){

        self.status = {
          bakerloo: res.data[0].lineStatuses[0].statusSeverityDescription,
          central: res.data[1].lineStatuses[0].statusSeverityDescription,
          district: res.data[3].lineStatuses[0].statusSeverityDescription,
          hammersmith: res.data[4].lineStatuses[0].statusSeverityDescription,
          jubilee: res.data[5].lineStatuses[0].statusSeverityDescription,
          northern: res.data[7].lineStatuses[0].statusSeverityDescription,
          picadilly: res.data[8].lineStatuses[0].statusSeverityDescription
        }
      });
    })
  }    

 //word of the day
  this.wod = function() {
    WordService.get().then(function(res){
      $scope.$applyAsync(function(){
        self.word = res.data;
      });
    })
  }  


  //weather call 
  this.displayWeather = function() {
    weather.get().then(function(res) {
      $scope.$applyAsync(function(){
        self.temperature = {
          temp: res.list[0].temp.day,
          description: res.list[0].weather[0].description,
          icon: res.list[0].weather[0].icon,
          name: res.city.name
        }
      });
    });
  }   

  //guaridan test for sport
  this.guardianSport = function() {
    GNews.get(). then(function(res){
      $scope.$applyAsync(function(){
        self.sport = res.data.response.results;
        console.log("loaded", self.sport)
      });  
    })
  }
  //bpl table
  this.table = function() {
    football.get().then(function(res){
      $scope.$applyAsync(function(){
        self.tables = res.data.standing;
        console.log(res.data.standing);
      });  
    });
  }

  quote.get().then(function(res){
    
          console.log(res);
      
    
  });

  this.score = function() {
    ScoresLive.get().then(function(res){
      self.scores = res.data;
      console.log(res.data);
    })
  }
  this.champions = function() {
    ChampionsLive.get().then(function(res){
      self.scoresCh = res.data;
      console.log(res.data);
    })
  }

self.champions();

  this.guardianUk = function() {
    GallService.get().then(function(res){
      $scope.$applyAsync(function(){
        self.allNews = res.data.response.results;
        console.log(self.allNews);
      }); 
    })
  }  

//create new note and add it to array of notes
 socket.on('note', function(note){
  $scope.$applyAsync(function(){
     self.notes.push(note);
  })
 }) 

//query all notes in database and make it equal to notes
 socket.on('notes', function(notes){
   //filter only current user notes
  var allNotes = notes.notes 
  var userNotes = allNotes.filter(function(note){
    return note.user == self.user._id
  })
  self.notes = userNotes;
 });
   

 self.sendNote = function(user) {
   socket.emit('note', { note: self.note, user: user})
   self.note = null;
 }

 self.deleteNote = function(note) {
  console.log("notes id", note._id);
  socket.emit('delete note', note._id)
 
  var index = self.notes.indexOf(note);
  self.notes.splice(index, 1);
 }

}
