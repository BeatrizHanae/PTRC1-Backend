const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('Contatos', {
        ID_CLIENTE: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOME:{ type: Sequelize.STRING},
        EMAIL: { type: Sequelize.STRING},
        MENSAGEM: { type: Sequelize.TEXT},
        TELEFONE: { type: Sequelize.INTEGER}
})