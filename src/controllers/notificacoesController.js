const NotificacoesService = require('../services/notificacoesService');

const NotificacoesController = {
    create: async (req, res) => {
        try {
            const notificacao = await NotificacoesService.create(req.body);
            return res.status(201).json({
                msg: 'Notificação criada com sucesso',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar Notificação'
            });
        }
    },

    update: async (req, res) => {
        try {
            const notificacao = await NotificacoesService.update(req.params.id, req.body);
            if (!notificacao) {
                return res.status(400).json({
                    msg: 'Notificação não encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Notificação atualizada com sucesso',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar Notificação'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const notificacoes = await NotificacoesService.getAll();
            return res.status(200).json({
                msg: 'Todas as Notificações',
                notificacoes
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar as Notificações'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const notificacao = await NotificacoesService.getById(req.params.id);
            if (!notificacao) {
                return res.status(404).json({
                    msg: 'Notificação não encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Notificação encontrada',
                notificacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar a Notificação'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const notificacao = await NotificacoesService.delete(req.params.id);
            if (!notificacao) {
                return res.status(400).json({
                    msg: 'Notificação não encontrada',
                });
            }
            return res.status(200).json({
                msg: 'Notificação deletada com sucesso!',
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar a Notificação'
            });
        }
    }
};

module.exports = NotificacoesController;
