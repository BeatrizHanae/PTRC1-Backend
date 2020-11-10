const express = require ("express")
const center = express.Router();

const apiClients = require ('./api/apiClients');
const cors = require('cors')

center.use(cors())

//rota para o cliente
center.use('/apiClients', apiClients); 

module.exports = center;