const Sequelize = require('sequelize')
const ClientModel = require ('./models/Clients')

const sequelize = new Sequelize('aupris','root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
})

const Client = ClientModel(sequelize, Sequelize); //conectando o bd

sequelize.sync({ force: false})
    .then(() => {
    console.log('Tabela Criada')
})

module.exports = { //Exportando o bd
    Client
}
