const express = require ("express");
const authController = require('../../controllers/SuporteController');
const router = express.Router();

//post SuporteManutencao
router.post('/suportemanutencao', authController.RegisterManutencao);

//post SuporteTreinamento
router.post('/suportetreinamento', authController.RegisterTrein);


module.exports = router;