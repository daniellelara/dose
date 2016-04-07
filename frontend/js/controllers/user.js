angular.module('dose')
  .controller('UserController', UserController);

UserController.$inject = ['weather', '$window', '$scope', 'TransportService', 'WordService', 'Video', 'tokenService', 'GNews', 'GallService', 'football', 'quote', 'ScoresLive', 'ChampionsLive'];

function UserController(weather, $window, $scope, TransportService, WordService, Video, tokenService, GNews, GallService, football, quote, ScoresLive, ChampionsLive) {
  var socket = $window.io("http://localhost:3000");

  socket.on('connect', function() {
    console.log("CONNECTED!");
  });

  var self = this;
  this.lat = 0;
  this.lon = 0;
  this.temperature = {};
  this.status = null;
  this.word = null;
  this.video = null;
  self.notes =[];
  self.note = null;
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

 //word of the day
  this.wod = function() {
    WordService.get().then(function(res){
      $scope.$applyAsync(function(){
        self.word = res.data;
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
