const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('suporte_manutencao', {
        DATA: { type: Sequelize.STRING},
        HORA: { type: Sequelize.STRING},
        NOME_CLIENTE: { type: Sequelize.STRING},
        NOME_EMPRESA: { type: Sequelize.STRING},
        CPF: { type: Sequelize.INTEGER},
        DESCRICAO: { type: Sequelize.STRING},
        ID_SUPORTE: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    })
