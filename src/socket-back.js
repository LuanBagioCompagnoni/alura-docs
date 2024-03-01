import io from './server.js'

io.on('connection', (socket) => {
  console.log('Client connected ', socket.id);

  socket.on("textEditor", (text) => {
    
  })
});