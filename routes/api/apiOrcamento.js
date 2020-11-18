const express = require ("express");
const authController = require('../../controllers/OrcamentoController');

const router = express.Router();

//post Orçamento
router.post('/Orcamento', authController.registerOrcamento);

module.exports = router;