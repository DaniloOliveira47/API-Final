const { Router } = require("express");
const clienteRotas = require('./clienteRotas');  
const notificacaoRotas = require('./notificacoesRotas'); 
const transacaoRotas = require('./transacoesRotas');  
const contaRotas = require('./contaRotas');  
const adminRotas = require('./adminRotas')

const router = Router();


router.use('/clientes', clienteRotas); 
router.use('/notificacoes', notificacaoRotas);
router.use('/transacoes', transacaoRotas);
router.use('/contas', contaRotas); 
router.use('/admins', adminRotas ); 

module.exports = router;
