const express = require ("express");
const authController = require('./ProdutosController');

const router = express.Router();

//post novo produto
router.post('/register', authController.registerProd)

module.exports = router;