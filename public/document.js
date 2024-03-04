import { selectDocument, textEditorEmit } from "./socket-front_document.js";

const textEditor = document.getElementById('editor-texto');
const params = new URLSearchParams(window.location.search)
const documentName = params.get("nome")
const documentTitle = document.getElementById("titulo-documento")

documentTitle.textContent = documentName || "Document without title"

selectDocument(documentName);

textEditor.addEventListener('keyup', () => {
  textEditorEmit({
    text: textEditor.value,
     documentName})
});

function updateEditorText(text){
  textEditor.value = text;
}

export { updateEditorText }