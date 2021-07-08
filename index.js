const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
// add socket io
const { Server } = require('socket.io');
const io = new Server(server)

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
});

// event connection
io.on('connection', (socket) => {
    console.log('a user connected');
    // event disconnect
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });
});

server.listen(3000,() => {
    console.log('listening on *:3000') 
});