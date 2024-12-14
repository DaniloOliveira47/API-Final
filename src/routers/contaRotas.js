const { Router } = require("express");
const contaController = require('../controllers/contasController'); 

const router = Router();


router.post('/', contaController.create);  
router.get('/', contaController.getAll);   
router.get('/:id', contaController.getOne); 
router.put('/:id', contaController.update); 
router.delete('/:id', contaController.delete); 

module.exports = router;
