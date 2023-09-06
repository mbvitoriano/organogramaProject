const express = require('express');

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Oi Lucas, Tudo bem?');
});

app.listen(port, () => console.log(`🚀 Servidor está rodando na porta ${port}!`));

module.exports = app;
