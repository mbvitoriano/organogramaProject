const express = require('express');

const router = express.Router();

const FuncionariosController = require('../controllers/FuncionariosController');

// GET para listar todos os funcionários
router.get('/', FuncionariosController.listarFuncionarios);

// GET para listar os funcionários por ID
router.get('/:id', FuncionariosController.listarFuncionarioPorId);

module.exports = router;
