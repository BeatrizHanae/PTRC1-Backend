const express = require ("express");
const authController = require('../../controllers/ContatosController');

const router = express.Router();

//post contato
router.post('/contato', authController.registerContato);

module.exports = router;