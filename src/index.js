import * as monaco from 'monaco-editor';
import './style.css';
import download from 'downloadjs';

const langSelector = document.querySelector('.lang-selector');
const container = document.querySelector('.container');
const downloadButton = document.querySelector('.download');

const monacoEditor = monaco.editor.create(container, {
  value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  language: 'typescript',
  theme: 'vs-dark'
});

monaco.editor.colorizeElement(container);

const model = monacoEditor.getModel();

langSelector.addEventListener('change', () => {
  monaco.editor.setModelLanguage(model, langSelector.value);
});

downloadButton.addEventListener('click', () => {
  switch (langSelector.value) {
    case 'javascript':
      download(monacoEditor.getValue(), 'script.js', 'text/plain');
      break;
    case 'html':
      download(monacoEditor.getValue(), 'index.html', 'text/plain');
      break;
    case 'css':
      download(monacoEditor.getValue(), 'style.css', 'text/plain');
      break;
  }
});
