<!DOCTYPE html>
<html ng-app="dose">
<head>
  <title>Dose Tools</title>
  <link rel="icon" href="/images/dose.png">
  <script src="http://localhost:3000/socket.io/socket.io.js" charset="utf-8"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
  <!-- angular -->
  <script src="/js/vendor/angular-resource/angular-resource.min.js"></script>

  <!-- for gridster -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <link rel="stylesheet" href="/js/vendor/angular-gridster/dist/angular-gridster.min.css"/>
  <script src="/js/vendor/javascript-detect-element-resize/jquery.resize.js"></script>
  <script src="/js/vendor/angular-gridster/dist/angular-gridster.min.js"></script>
  
 

  <!-- satellizer -->
  <script type="text/javascript" src="/js/vendor/satellizer/satellizer.min.js"></script>
<!--   jwt -->
  <script src="/js/vendor/angular-jwt/dist/angular-jwt.min.js"></script>
  <!-- bluebird -->
  <script src="/js/vendor/bluebird/js/browser/bluebird.min.js"></script>
  <script src="/js/vendor/ng-file-upload/ng-file-upload.min.js"></script>

  <!-- link to controllers, directives and services -->
  <script src="/js/app.js" charset="utf-8"></script>
  <script src="/js/services/transport.js" charset="utf-8"></script>
  <script src="/js/controllers/user.js" charset="utf-8"></script>
  <script src="/js/services/oauthKeys.js" charset="utf-8"></script>
  <script src="/js/services/scores.js" charset="utf-8"></script>
  <script src="/js/directives/scores.js" charset="utf-8"></script>
  <script src="/js/services/football.js" charset="utf-8"></script>
  <script src="/js/services/tools.js" charset="utf-8"></script>
  <script src="/js/services/token.js" charset="utf-8"></script>
  <script src="/js/services/word.js" charset="utf-8"></script>
  <script src="/js/services/quote.js" charset="utf-8"></script>
  <script src="/js/services/champions.js" charset="utf-8"></script>
  <script src="/js/services/guardian.js" charset="utf-8"></script>
  <script src="/js/services/guardianAll.js" charset="utf-8"></script>
  <script src="/js/services/video.js" charset="utf-8"></script>
  <script src="/js/services/location.js" charset="utf-8"></script>
  <script src="/js/controllers/main.js" charset="utf-8"></script>
  <script src="/js/directives/guardiansport.js" charset="utf-8"></script>
  <script src="/js/directives/league.js" charset="utf-8"></script>
  <script src="/js/directives/guardianall.js" charset="utf-8"></script>
  <script src="/js/directives/video.js" charset="utf-8"></script>
  <script src="/js/directives/transport.js" charset="utf-8"></script>
  <script src="/js/directives/word.js" charset="utf-8"></script>
  <script src="/js/directives/clock.js" charset="utf-8"></script>
  <script src="/js/directives/weather.js" charset="utf-8"></script>
  <script src="/js/directives/champions.js" charset="utf-8"></script>
  <script src="/js/services/weather.js" charset="utf-8"></script>

  <!-- stylesheets -->
  <link rel="stylesheet" type="text/css" href="/css/animate.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
 <link href='https://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="/css/app.css">

</head>
<body ng-controller="UserController as user">
  <div ng-controller="MainController as main">
    <header>
      <div ng-show="main.isLoggedIn()">
        <img  ng-src="{{ main.currentUser.picture }}">
        <i class="fa each fa-sign-out name" ng-click="main.logout()"></i>
        <i class="fa fa-cog each" ng-click="show = !show; main.setOpacity()"></i>
      </div>
    </header>

    <div ng-hide="main.isLoggedIn()" class="center-login">
      <div class="center">
        <img  class="brand" src="/images/dose.png">
      </div>
      <div class="buttons">
        <hr/> 
        <i class="fa fa-facebook-square facebook" ng-click="main.authenticate('facebook')"></i>
        <i ng-click="main.authenticate('github')" class="fa fa-github-square github"></i>
        <i class="fa fa-twitter-square twitter"></i>
      </div>  
       
    </div>
    <div ng-show="show" class="center-add">
      <div class="top">
      <button class="close" ng-click="main.deleteOpacity(); show = !show"><i class="fa fa-minus"></i></button>
      </div>
      <div class="head">

        <p>add a tool</p>
      </div>
      <div class="row apps">
        <div class="col-md-4 animated" id="Weather" ng-mouseover="main.text('Weather1')" ng-mouseleave="main.textLeave('Weather1')" ng-click="main.addTool('Weather'); user.displayWeather()" class="add"><div id="Weather1" class="text">weather</div><img class="iconstore" src="./images/weather1.png"></div>
        
        <div class="col-md-4 animated" id="Word" ng-mouseover="text1 = !text1" ng-click="main.addTool('Word'); user.wod()" class="add"><div ng-show="text1" class="text">word a day</div><img class="iconstore" src="./images/word2.png"></div>

        <div class="col-md-4 animated" id="Ted" ng-click="main.addTool('Ted'); user.ted()" class="add"><img class="iconstore" src="./images/ted2.png"></div>
        
        <div class="col-md-4 animated" id="bpl" ng-click="main.addTool('bpl'); user.table()" class="add"><img class="iconstore" src="./images/bpl.png"></div>
        
        <div class="col-md-4 animated" id="scores" ng-click="main.addTool('scores'); user.score()" class="add"><img class="iconstore" src="./images/scores.png"></div>
     
        <div class="col-md-4 animated" id="Tfl" ng-click="main.addTool('Tfl'); user.tfl()" class="add"><img class="iconstore" src="./images/tfl2.png"></div>

        <div class="col-md-4 animated" id="Clock" ng-click="main.addTool('Clock')" class="add"><img class="iconstore" src="./images/clock3.png"></div>

        <div class="col-md-4 animated" id="Note" ng-click="main.addTool('Note')"><img class="iconstore" src="./images/note3.png"></div>
     
        <div class="col-md-4 animated" id="Sport" ng-click="main.addTool('Sport'); user.guardianSport();" class="add"><img class="iconstore" src="./images/guardian2.png"></div>

        <div class="col-md-4 animated" id="Allnews" ng-click="main.addTool('Allnews'); user.guardianUk()" class="add"><img class="iconstore" src="./images/weather2.png"></div>
    

        <div class="col-md-4 animated" id="champions" ng-click="main.addTool('champions'); user.guardianUk()" class="add"><img class="iconstore" src="./images/champions.png"></div>
 </div>
      <p>pick a background</p>
      <div class="row appstwo">
        <div class="picture" ng-click="main.backgroundChange('forest')" class="add"><img class="iconpaper" src="./images/forest.jpg"></div>
        <div class="picture" ng-click="main.backgroundChange('forestTwo')" class="add"><img class="iconpaper" src="./images/forest2.jpg"></div>
        <div class="picture" ng-click="main.backgroundChange('sun')" class="add"><img class="iconpaper" src="./images/sun.jpg"></div>
        <div class="picture" ng-click="main.backgroundChange('night sky')" class="add"><img class="iconpaper" src="./images/nightsky.jpg"></div>
        <div class="picture" ng-click="main.backgroundChange('mine')" class="add"><img class="iconpaper" src="{{ main.myImage }}"></div>

        <div class="picture" ng-click="main.backgroundChange('mine')" class="add">
        <div class="add-icon">
          <form ng-submit="main.addPhoto(image)">
            
              <p>
              
                <i class="fa fa-plus"></i>
                <input ngf-select ng-model="image" type="file" id="exampleInputFile">
              </p>
              <button>add</button>
            
          </form>
          </div>
        </div>
      </div>      
     <!-- change opacity back on close and hide div   --> 
    
    </div>

    <section id="board" ng-show="main.isLoggedIn()">
  <!--   <div class="container"> -->
      <div data-gridster>
        <ul>
        <!-- weather -->
          <li ng-if="main.hasTool('Weather')" data-gridster-item data-row="0" data-col="0" data-sizex="1" data-sizey="2"><div class="dg-weather" dg-data="user.temperature"></div></li>

          <li ng-if="main.hasTool('Word')" data-gridster-item data-row="1" data-col="2" data-sizex="1" data-sizey="1" ><div class="tile info"><div class="headline-bpl"><i class="fa fa-minus" ng-click="main.deleteTool('Word')"></i></div><div class="dg-word" dg-data="user.word"></div></div></li>

      <!--     tfl status -->
          <li ng-if="main.hasTool('Tfl')" data-gridster-item data-row="1" data-col="1" data-sizex="1" data-sizey="1"><div class="dg-transport" dg-data="user.status"></div></li>

          <li ng-if="main.hasTool('Ted')" data-gridster-item data-row="1" data-col="3" data-sizex="2" data-sizey="1" ><div class="tile info"><div class="headline-video">TED <i class="fa fa-minus" ng-click="main.deleteTool('Ted')"></i></div><div class="dg-video" dg-data="user.video"></div></div></li>

          <!-- clock tool -->
          <li ng-if="main.hasTool('Clock')" data-gridster-item data-row="2" data-col="0" data-sizex="1" data-sizey="1" ><div class="dg-clock info"></div></li>
          
       <!--    guardian sport -->
          <li ng-if="main.hasTool('Sport')" data-gridster-item data-row="2" data-col="4" data-sizex="1" data-sizey="1" ><div class="dg-GSport" dg-data="user.sport"></div></li> 

          <!-- al news -->
          <li ng-if="main.hasTool('Allnews')" data-gridster-item data-row="3" data-col="0" data-sizex="1" data-sizey="1" ><div class="dg-GAll" dg-data="user.allNews"></div></li>

          <li ng-if="main.hasTool('scores')" data-gridster-item data-row="3" data-col="6" data-sizex="2" data-sizey="1" ><div class="dg-Scores scores" dg-data="user.scores"></div></li>
          
          <!-- champions league -->
          <li ng-if="main.hasTool('champions')" data-gridster-item data-row="3" data-col="9" data-sizex="2" data-sizey="1" ><div class="dg-Champions" dg-data="user.scoreC"></div></li>

          <!-- bpl -->
          <li  ng-if="main.hasTool('bpl')" data-gridster-item data-row="3" data-col="4" data-sizex="2" data-sizey="1" ><div class="dg-PLeague" dg-data="user.tables"></div></li>

          <li ng-if="main.hasTool('Note')" data-gridster-item data-row="2" data-col="2" data-sizex="2" data-sizey="1" >
            <div class="tile-note">
              <div class="headline-news">notes<i class="fa fa-minus" ng-click="main.deleteTool('Note')"></i>
              </div>
              <ul class="cont-note">
                <li class="notes" ng-repeat="note in user.notes track by $index">
                  <p class="notes-text">{{ note.note }} <i ng-click="user.deleteNote(note)" class="fa fa-minus note-delete"></i></p></li>
              </ul>
              <form ng-submit="user.sendNote(main.currentUser._id)" class="form-inline">
                <div class="form-group another">
                  <input ng-model="user.note" class="note btn-block">
                </div>
                  <button class="btn btn-secondary-outline btn-block add-note">add note</button>
              </form>
            </div>
          </li>
        </ul>
      </div>
   </section>
  </div>
</body>
</html>