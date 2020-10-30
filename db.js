const Sequelize = require('sequelize')
const ProdsModel = require ('./models/Prods')
const ClientModel = require ('./models/Clients')

const sequelize = new Sequelize('aupris','root', null, {
    host: '127.0.0.1',
    dialect: 'mysql'
})

const Client = ClientModel(sequelize, Sequelize); //conectando o bd
const Prods = ProdsModel(sequelize, Sequelize);
const ProCli = [Prods, Client];

sequelize.sync({ force: false})
    .then(() => {
    console.log('Tabelas Criadas')
})

module.exports = { //Exportando o bd
    ProCli
}
