const express = require ("express");
const authController = require('../../controllers/LoginClientController');

const router = express.Router();

//post novo cliente
router.post('/register', authController.registerClient)

//post login
router.post('/login' , authController.loginClient)

//delete cliente
router.delete('/delete/:id', authController.deleteClient)

module.exports = router;