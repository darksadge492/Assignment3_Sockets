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

    socket.on('winCheck', () => {
        console.log('win check event triggered(app.js)');
        io.emit('update_win');
    });

    socket.on('reset', () => {
        console.log('reset tic-tac-toe event triggered(app.js)');
        io.emit('reset_tictactoe');
    });

    socket.on('pressSquareOne', () => {
        console.log('pressed square one');
        io.emit('press_ONE');
    });

    socket.on('pressSquareTwo', () => {
        console.log('pressed square two');
        io.emit('press_TWO');
    });

    socket.on('pressSquareThree', () => {
        console.log('pressed square three');
        io.emit('press_THREE');
    });

    socket.on('pressSquareFour', () => {
        console.log('pressed square four');
        io.emit('press_FOUR');
    });

    socket.on('pressSquareFive', () => {
        console.log('pressed square five');
        io.emit('press_FIVE');
    });

    socket.on('pressSquareSix', () => {
        console.log('pressed square six');
        io.emit('press_SIX');
    });

    socket.on('pressSquareSeven', () => {
        console.log('pressed square seven');
        io.emit('press_SEVEN');
    });

    socket.on('pressSquareEight', () => {
        console.log('pressed square eight');
        io.emit('press_EIGHT');
    });

    socket.on('pressSquareNine', () => {
        console.log('pressed square nine');
        io.emit('press_NINE');
    });

});

app.use(express.static(__dirname + '/public'));
server.listen(LISTEN_PORT);
console.log('Listening to port: ' + LISTEN_PORT);