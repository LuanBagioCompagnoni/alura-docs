import { updateEditorText } from "./document.js";

const socket = io();

function selectDocument(name){
    socket.emit("select_document");
}
function textEditorEmit(data){
  socket.emit('textEditor', text, documentName);
}

socket.on('textEditorClients', (text) => {
    updateEditorText(text)
});

export { textEditorEmit, selectDocument }