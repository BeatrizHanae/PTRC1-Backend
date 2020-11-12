const express = require ("express")
const center = express.Router();
const apiClients = require ('./api/apiClients');
const apiProds = require ('./api/apiProds');
const apiContatos = require ('./api/apiContatos');
const cors = require('cors')

center.use(cors())

//rota para o cliente
center.use('/apiClients', apiClients); 

//rota para o produto
center.use('/apiProducts', apiProds);

//rota para o contato
center.use('/apiContatos', apiContatos);

module.exports = center;

