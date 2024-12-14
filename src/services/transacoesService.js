const Transacao = require('../models/Transacao');

const TransacaoService = {
    create: async (transacao) => {
        try {
            return await Transacao.create(transacao);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a Transação');
        }
    },

    update: async (id, transacaoToUpdate) => {
        try {
            const transacao = await Transacao.findByPk(id);
            if (!transacao) {
                return null;
            }
            await transacao.update(transacaoToUpdate);
            return transacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar a Transação');
        }
    },

    getById: async (id) => {
        try {
            const transacao = await Transacao.findByPk(id);
            if (!transacao) {
                return null;
            }
            return transacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar a Transação');
        }
    },

    getAll: async () => {
        try {
            return await Transacao.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar as Transações');
        }
    },

    delete: async (id) => {
        try {
            const transacao = await Transacao.findByPk(id);
            if (!transacao) {
                return null;
            }
            await transacao.destroy();
            return transacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Transação');
        }
    }
};

module.exports = TransacaoService;
