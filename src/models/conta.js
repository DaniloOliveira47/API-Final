const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cliente = require("./cliente");

const Conta = sequelize.define('Conta', {
    saldo: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id',
        }
    },

}, {
    timestamps: true
});

module.exports = Conta;