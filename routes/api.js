const express = require ("express")

const router = express.Router();

const apiClients = require ('./api/apiClients');

router.use('/apiClients', apiClients); 

const apiProds = require ('./api/apiProds');

router.use('/apiProducts', apiProds);

module.exports = router;
