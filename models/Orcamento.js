const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('Orcamentos', {
        
        
        PRODUTOS: { type: Sequelize.STRING},
        PAGAMENTOS: { type: Sequelize.STRING},
        CONTATO: {type: Sequelize.INTEGER},
        ID_ORCAMENTO: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    })