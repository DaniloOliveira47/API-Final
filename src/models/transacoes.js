const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Conta = require("./conta");

const Transacao  = sequelize.define('Transacao', {
    tipoConta: {
        type: DataTypes.ENUM(
            "Corrente",
            "Poupança",
            "Salário",
            "Mista",
            "Digital",
            "Universitária",
            "Conjunta",
            "Solidária"
        ),
        allowNull: false
    },

    tipoTransacao: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },

    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
       
    }, 

   dataTransacao: { 
    type: DataTypes.DATE,
    allowNull: false,
},
    contaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Conta,
            key: 'id',
        }
    }

}, {
    timestamps: true
});

module.exports = Transacao;