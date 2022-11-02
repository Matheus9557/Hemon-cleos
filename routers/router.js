require('dotenv').config();
const express = require ('express');
const router = express.Router();
const pontoController = require('../controllers/PontoController');
const Ponto = require('../models/ponto');

router.get('/lista', pontoController.listarPontos);

module.exports = router;