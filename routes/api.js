const express = require ("express")
const center = express.Router();
const apiUsers = require ('./api/apiUsers');
const apiProds = require ('./api/apiProds');
const apiContatos = require ('./api/apiContatos');
const cors = require('cors')

center.use(cors())

//rota para o cliente
center.use('/apiUsers', apiUsers); 

//rota para o produto
center.use('/apiProducts', apiProds);

//rota para o contato
center.use('/apiContatos', apiContatos);


module.exports = center;

