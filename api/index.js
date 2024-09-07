// // Importando o módulo express para lidar com rotas e middlewares
// const express = require('express');
// var bodyParser = require('body-parser');

// // Inicializando a aplicação Express
// const app = express();

// // Importando as rotas da aplicação relacionadas às pdf
// const pdfRoutes = require('../routes/pdfRoutes');

// // Configurando as rotas da aplicação para utilizar as rotas
// //relacionadas às pdf
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// app.use('/api', pdfRoutes);

// app.get("/", (req, res) => res.send("Express on Vercel"));

// // Inicializando o servidor e fazendo com que ele escute na porta definida
// app.listen(3000, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

if (!module.parent)
  app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
