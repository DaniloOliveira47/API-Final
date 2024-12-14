const Cliente = require('../models/cliente');

const ClienteService = {
    create: async (cliente) => {
        try {
            return await Cliente.create(cliente);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Cliente');
        }
    },

    update: async (id, clienteToUpdate) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            await cliente.update(clienteToUpdate);
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar Cliente');
        }
    },

    getById: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar um único Cliente');
        }
    },

    getAll: async () => {
        try {
            return await Cliente.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar os Clientes');
        }
    },

    delete: async (id) => {
        try {
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return null;
            }
            await cliente.destroy();
            return cliente;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o Cliente');
        }
    }
};

module.exports = ClienteService;
