const ClienteService = require('../services/clienteService');

const ClienteController = {
    create: async (req, res) => {
        try {
            const cliente = await ClienteService.create(req.body);
            return res.status(201).json({
                msg: 'Cliente criado com sucesso',
                cliente
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar Cliente'
            });
        }
    },

    update: async (req, res) => {
        try {
            const cliente = await ClienteService.update(req.params.id, req.body);
            if (!cliente) {
                return res.status(400).json({
                    msg: 'Cliente não encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Cliente atualizado com sucesso',
                cliente
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar Cliente'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const clientes = await ClienteService.getAll();
            return res.status(200).json({
                msg: 'Todos os Clientes',
                clientes
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro ao buscar os Clientes'
            });
        }
    },

    getOne: async (req, res) => {
        try {
            const cliente = await ClienteService.getById(req.params.id);
            if (!cliente) {
                return res.status(404).json({
                    msg: 'Cliente não encontrado',
                });
            }
            return res.status(200).json({
                msg: 'Cliente encontrado',
                cliente
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro ao buscar o Cliente'
            });
        }
    },

    delete: async (req, res) => {
        try {
            const cliente = await ClienteService.delete(req.params.id);
            if (!cliente) {
                return res.status(400).json({
                    msg: 'Cliente não encontrado',
                });
            }
            return res.status(200).json({
                msg: 'Cliente deletado com sucesso!',
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro ao deletar o Cliente'
            });
        }
    }
};

module.exports = ClienteController;
