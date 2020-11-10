const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('login_clientes', {
        ID_CLIENTE: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOME:{ type: Sequelize.STRING},
        USERNAME: { type: Sequelize.STRING},
        CPF: { type: Sequelize.STRING},
        SENHA: { type: Sequelize.STRING}
})