const express = require('express');
const app = express();

const avisos = [
  'Reunião de responsáveis',
  'Prova de Matemática',
  'Entrega de trabalhos'
];

app.get('/lista de usuários', (req, res) => {
  res.json(pessoas);
});
app.get('/lista de tareas', (req, res) => {
  res.json(tarefas);
});
app.get('/reservas', (req, res) => {
  res.json(reservas);
});
app.get('/sistema ativo', (req, res) => {
  res.json(o sistemas esta ativo)
});
app.get('/3 turmas, res) => {
  res.json(avisos);
});
app.get('/avisos', (req, res) => {
  res.json(avisos);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});