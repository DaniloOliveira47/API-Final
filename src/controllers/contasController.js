const ContaService = require('../services/contaService');

const ContaController = {
    create: async (req, res) => {
        try {
            const conta = await ContaService.create(req.body);
            return res.status(201).json({
                msg: 'Conta criada com sucesso',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar Conta'
            });
        }
    },

    update: async (req, res) => {
        try {
            const conta = await ContaService.update(req.params.id, req.body);
            if (!conta) {
                return res.status(400).json({
                    msg: 'Conta não encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Conta atualizada com sucesso',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar Conta'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const contas = await ContaService.getAll();
            return res.status(200).json({
                msg: 'Todas as Contas',
                contas
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro ao buscar as Contas'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const conta = await ContaService.getById(req.params.id);
            if (!conta) {
                return res.status(404).json({
                    msg: 'Conta não encontrada',
                });
            }
            return res.status(200).json({
                msg: 'Conta encontrada',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro ao buscar a Conta'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const conta = await ContaService.delete(req.params.id);
            if (!conta) {
                return res.status(400).json({
                    msg: 'Conta não encontrada',
                });
            }
            return res.status(200).json({
                msg: 'Conta deletada com sucesso!',
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro ao deletar a Conta'
            });
        }
    }
};

module.exports = ContaController;
