const express = require ("express")
const center = express.Router();
const apiClients = require ('./api/apiClients');
const apiProds = require ('./api/apiProds');
const cors = require('cors')

center.use(cors())

//rota para o cliente
center.use('/apiClients', apiClients); 


center.use('/apiProducts', apiProds);


module.exports = center;

