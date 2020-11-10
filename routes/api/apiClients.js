const express = require ("express");
const authController = require('../../controllers/LoginClientController');
const router = express.Router();

//post novo cliente
router.post('/cadastro', authController.registerClient)

//post login
router.post('/login' , authController.loginClient)

module.exports = router;