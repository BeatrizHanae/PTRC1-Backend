const express = require ("express")
const center = express.Router();
const apiUsers = require ('./api/apiUsers');
const apiProds = require ('./api/apiProds');
const cors = require('cors')

center.use(cors())

//rota para o cliente
center.use('/apiUsers', apiUsers); 

center.use('/apiProducts', apiProds);



module.exports = center;

