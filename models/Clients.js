module.exports = (sequelize, DataTypes) => {
    const clientes = sequelize.define('login_clientes', {
        NOME: DataTypes.STRING,
        USERNAME: DataTypes.STRING,
        SENHA: DataTypes.STRING,
        CPF: DataTypes.INTEGER,
        ID_CLIENTE: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    })
    return clientes;
}