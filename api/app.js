var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = require('./config/routes');
var config = require('./config/app');
var server  = require('http').createServer(app);
var io      = require('socket.io')(server);

express.static(__dirname + "/public");

mongoose.connect(config.databaseUrl);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: config.appUrl,
  credentials: true
}));

app.use('/', router);

io.on('connect', function(socket){
  console.log("User connected with socket id of:" + socket.conn.id);
  socket.on('temperature', function(temperature){
    console.log(temperature);
    io.emit('temperature', temperature);
    
  });
});

server.listen(config.port, function() {
  console.log("Express is listening on port " + config.port);
});