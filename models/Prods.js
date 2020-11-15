const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('produtos', {
        NOME: { type: Sequelize.STRING},
        ID_PRODUCT: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },
        VALOR: { type: Sequelize.FLOAT},
        QUANTIDADE: { type: Sequelize.INTEGER},
        IMAGEM: {type: Sequelize.STRING},
    })
