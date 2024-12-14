const TransacaoService = require('../services/transacoesService')

const TransacaoController = {
    create: async (req, res) => {
        try {
            const transacao = await TransacaoService.create(req.body);
            return res.status(201).json({
                msg: 'Transação criada com sucesso',
                transacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar Transação'
            });
        }
    },

    update: async (req, res) => {
        try {
            const transacao = await TransacaoService.update(req.params.id, req.body);
            if (!transacao) {
                return res.status(400).json({
                    msg: 'Transação não encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Transação atualizada com sucesso',
                transacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar Transação'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const transacoes = await TransacaoService.getAll();
            return res.status(200).json({
                msg: 'Todas as Transações',
                transacoes
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar as Transações'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const transacao = await TransacaoService.getById(req.params.id);
            if (!transacao) {
                return res.status(404).json({
                    msg: 'Transação não encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Transação encontrada',
                transacao
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar a Transação'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const transacao = await TransacaoService.delete(req.params.id);
            if (!transacao) {
                return res.status(400).json({
                    msg: 'Transação não encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Transação deletada com sucesso!',
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar a Transação'
            });
        }
    }
};

module.exports = TransacaoController;
