const express = require('express');

const router = express.Router();

const funcionario = require('../models/Funcionario');

const funcionarios = require();

const app = express();

class FuncionariosController {
  // Post
  static cadastrarFuncionario = async (req, res, next) => {
    try {
      const novoFuncionario = new funcionario(req.body);

      await novoFuncionario.save();
      res.status(201).json(novoFuncionario);
    } catch (erro) {
      next(erro);
    }
  };

  // Get By Id
  static listarFuncionarioPorId = async (req, res, next) => {
    try {
      const { id } = req.params;

      const funcionarioResultado = await funcionarios.findById(id);
      if (funcionario !== null) {
        res.status(200).json(funcionario);
      } else {
        console.log('Nao encontrado').json();
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default FuncionariosController;
