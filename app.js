// Importando o módulo express para lidar com rotas e middlewares
const express = require('express');
var bodyParser = require('body-parser');

// Inicializando a aplicação Express
const app = express();

// Importando as rotas da aplicação relacionadas às pdf
const pdfRoutes = require('./routes/pdfRoutes');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando as rotas da aplicação para utilizar as rotas 
//relacionadas às pdf
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', pdfRoutes);

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});