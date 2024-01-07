const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected with id', socket.id);

  socket.on('join room', (data) => {
    console.log('joined in room ', data)
    socket.join(data);
  });
  
  let = room = '123'
  socket.on('new msg', (data) => {
    io.to(room).emit('send', data);
    console.log(data);
  });

});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})
server.listen(3000, () => {
  console.log('server is live');
});