const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const io        = require('socket.io')(server); //our websockets library

const LISTEN_PORT = 8080;

//our routes
app.get('/', function(req, res) {
    res.sendFile('index.html', {root:__dirname + '/public/'});
});

//socket.io events
io.on('connection', (socket) => {
    console.log(socket.id + " is connected! HELLO!");

    socket.on('disconnect', () => {
        console.log(socket.id + " is disconnected. BYE!");
    });

    socket.on('red', (data) => {
        console.log('red event triggered');
        io.emit('color_change', {r:255, g:0, b:0});
    });

    socket.on('blue', (data) => {
        console.log('blue event triggered');
        io.emit('color_change', {r:0, g:0, b:255});
    });

    socket.on('flip', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_first');
    });

    socket.on('flap', () => {
        console.log('cooperative flap event triggered(app.js)');
        io.emit('rotate_second');
    });

    socket.on('flop', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_third');
    });

    socket.on('flep', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_fourth');
    });

    socket.on('flyp', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_fifth');
    });

    socket.on('flup', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_sixth');
    });

    socket.on('fling', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_seventh');
    });

    socket.on('flang', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_eighth');
    });

    socket.on('flung', () => {
        console.log('cooperative flip event triggered(app.js)');
        io.emit('rotate_ninth');
    });
});

app.use(express.static(__dirname + '/public'));
server.listen(LISTEN_PORT);
console.log('Listening to port: ' + LISTEN_PORT);