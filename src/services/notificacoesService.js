const Notificacoes = require('../models/notificacoes');

const NotificacaoService = {
    create: async (notificacao) => {
        try {
            return await Notificacoes.create(notificacao);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a Notificação');
        }
    },

    update: async (id, notificacaoToUpdate) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if (!notificacao) {
                return null;
            }
            await notificacao.update(notificacaoToUpdate);
            return notificacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar a Notificação');
        }
    },

    getById: async (id) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if (!notificacao) {
                return null;
            }
            return notificacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar a Notificação');
        }
    },

    getAll: async () => {
        try {
            return await Notificacoes.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar as Notificações');
        }
    },

    delete: async (id) => {
        try {
            const notificacao = await Notificacoes.findByPk(id);
            if (!notificacao) {
                return null;
            }
            await notificacao.destroy();
            return notificacao;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Notificação');
        }
    }
};

module.exports = NotificacaoService;
