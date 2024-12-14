const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Cliente = require("./cliente");

const Notificacoes = sequelize.define('Notificacao', {
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
     dataNotificacao: {
        type: DataTypes.DATE ,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id',
        }
    }

}, {
    timestamps: true

});

module.exports = Notificacoes;