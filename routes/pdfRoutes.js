// routes/tarefaRoutes.js

const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/pdfController');
// Rotas para operações CRUD de tarefas
router.post('/pdf', tarefaController.criarPdf);
module.exports = router;