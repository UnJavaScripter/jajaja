// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 1337;


var async = require('async');
var lame = require('lame');
var fs = require('fs');
var Speaker = require('speaker');
var volume = require("pcm-volume");


//////////////////////////////////////////////////////////////////
// Audio stuff
// ______________________________________________________________

var audioOptions = {
    channels: 2,
    bitDepth: 16,
    sampleRate: 44100,
    mode: lame.STEREO
};


var playing = false;
var song = 'lol.mp3';

function playStream(input, options) {
    var decoder = lame.Decoder();
    options = options || {};
    var v = new volume();
    if (options.volume) {
        v.setVolume(options.volume);
    }
    var speaker = new Speaker(audioOptions);
    speaker.on('finish', function() {
        playing = false;
    });
    function start() {
        v.pipe(speaker);
        decoder.pipe(v);
        input.pipe(decoder);
        
    }
    start();
}
///////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// Server
// ______________________________________________________________
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});


app.get('/lol', function(req, res) {
  res.send('loool');
  playTheSound();
});
app.use(express.static(__dirname + ''));
function playTheSound(){
    if(!playing){
        playing = true;
        var inputStream = fs.createReadStream(song);
        playStream(inputStream);
        console.log('loool');
    }
}


io.on('connection', function (socket) {
  	socket.on('jajaja', function (data) {
        playTheSound();
    });

});






