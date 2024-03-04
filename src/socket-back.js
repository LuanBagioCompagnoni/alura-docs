import io from './server.js'

const documents = [
  { 
    name: "JavaScript",
    text: "A JavaScript text..."
  },
  { 
    name: "Node",
    text: "A Node text..."
  },
  { 
    name: "Socket.io",
    text: "A Socket.io text..."
  },
]

io.on('connection', (socket) => {
  console.log('Client connected ', socket.id);

  socket.on("select_document", (name) =>{
    const document = findDocument(documentName);
    console.log(document)
    socket.join(name);
  })
  //serve para agrupar conexões, ou seja, é como se o socket criasse uma sala para cada documento, e cada usuário que entrar naquele documento, será conectado a sala

  socket.on("textEditor", ({ text, documentName }) => {
    // socket.broadcast.emit("textEditorClients", text)
    socket.to(documentName).emit("textEditorClients", text)
  })

  //caso usassemos "io.emit", a cada ação do usuário, todos os outros usuários (incluindo ele) receberia a ação que foi realizada
  //quando usamos socket.broadcast.emit ele transmite para todos menos para o atual
  //o socket.to está emitindo uma informação para a sala (nesse caso, a sala "documentName"), ou seja, apenas os usuários que estiverem na sala descrita receberão as informações
});

function findDocument(name){
  const document = documents.find((document) =>{
    return document.name === name;
  })

  return document;
}