const Conta = require('../models/conta');

const ContaService = {
    create: async (conta) => {
        try {
            return await Conta.create(conta);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Conta');
        }
    },

    update: async (id, contaToUpdate) => {
        try {
            const conta = await Conta.findByPk(id);
            if (!conta) {
                return null;
            }
            await conta.update(contaToUpdate);
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar Conta');
        }
    },

    getById: async (id) => {
        try {
            const conta = await Conta.findByPk(id);
            if (!conta) {
                return null;
            }
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar uma Conta');
        }
    },

    getAll: async () => {
        try {
            return await Conta.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar as Contas');
        }
    },

    delete: async (id) => {
        try {
            const conta = await Conta.findByPk(id);
            if (!conta) {
                return null;
            }
            await conta.destroy();
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Conta');
        }
    }
};

module.exports = ContaService;
