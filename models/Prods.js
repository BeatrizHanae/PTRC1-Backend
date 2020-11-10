const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('produtos', {
        ID_CLIENTE: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOME: { type: Sequelize.STRING},
        VALOR: { type: Sequelize.FLOAT},
        QUANTIDADE: { type: Sequelize.INTEGER},
    })
