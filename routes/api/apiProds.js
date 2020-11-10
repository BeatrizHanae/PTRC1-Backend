const express = require ("express");
const authController = require('../../controllers/ProdutosController');

const router = express.Router();

//post novo produto
router.post('/register', authController.registerProd);

//post pesquisar produto
router.post('/pesquisa', authController.pesquisarProd);

//post listar todos os produtos
router.post('/listar_produtos', authController.listarProds);

module.exports = router;
