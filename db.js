const Sequelize = require('sequelize')
const db = {} 


const sequelize = new Sequelize('aupris','root', null, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
})


sequelize.sync({ force: false})
    .then(() => {
    console.log('Tabelas Criadas')
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

