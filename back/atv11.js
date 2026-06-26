const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.send('sobre o projeto');
});
app.get('/equipe', (req, res) => {
  res.send('equipe responsável');
});
app.get('/contato', (req, res) => {
  res.send('numero de celular');
});
pp.get('/escolha', (req, res) => {
  res.send('peça de roupa ');
});
app.get('/aluno', (req, res) => {
  res.send('nome');
});
app.get('/dia', (req, res) => {
  res.send('data');
});
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});