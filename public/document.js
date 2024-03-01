const socket = io();

const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => {
  socket.emit('textEditor', textEditor.value);
});