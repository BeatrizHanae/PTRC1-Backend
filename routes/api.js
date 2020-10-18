const express = require ("express")

const router = express.Router();

const apiClients = require ('./api/apiClients');

router.use('/apiClients', apiClients); 

module.exports = router;