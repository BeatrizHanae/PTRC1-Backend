const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.sequelize.define('suporte_manutenção', {
        DATA: { type: Sequelize.INTEGER},
        HORA: { type: Sequelize.INTEGER},
        NOME_CLIENTE: { type: Sequelize.STRING},
        NOME_EMPRESA: { type: Sequelize.STRING},
        CPF: { type: Sequelize.INTEGER},
        DESCRIÇÃO: { type: Sequelize.STRING},
        ID_SUPORTE: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    })
