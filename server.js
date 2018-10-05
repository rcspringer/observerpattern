let express = require('express'); 
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = 3000;
let visibility = false;


app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/co2vrij.html');
});

app.get('/hidden', function(req, res) {
  res.sendFile(__dirname + '/private/index.html');
})

io.on('connection', function (socket) {
  io.emit('visibility', visibility);

  console.log('User connected');
  socket.on('disconnect', function () {
    console.log('User disconnected');
  });

  socket.on('visibility', function (msg) {
    if(msg == 'show') {
      visibility = true;
    } else if(msg == 'hide') {
      visibility = false;
    }
    io.emit('visibility', visibility);
    console.log(msg);
    
  });
});

http.listen(port, function(){
  console.log('Listening on port ' + port);
});

