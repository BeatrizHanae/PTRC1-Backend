const express = require ("express");
const authController = require('../../controllers/ProdutosController');

const router = express.Router();

//post novo produto
router.post('/register', authController.registerProd);

router.post('/pesquisa', authController.pesquisarProd);

module.exports = router;
