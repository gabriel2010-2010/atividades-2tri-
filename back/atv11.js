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
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});