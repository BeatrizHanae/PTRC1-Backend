const express = require ("express");
const authController = require('../../controllers/UserController');
const router = express.Router();

//post novo cliente
router.post('/cadastro', authController.registerClient)

//post login
router.post('/login' , authController.loginClient)

router.post('/funcionario', authController.registerEmployee)

module.exports = router;