module.exports = (sequelize, DataTypes) => {
    const prods = sequelize.define('produtos', {
        NOME: DataTypes.STRING,
        VALOR: DataTypes.FLOAT,
        QUANTIDADE: DataTypes.INTEGER,
        ID_PRODUTOS: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    })
    return prods;
}
