const { Router } = require('express');
const RoleController = require('../../controllers/RoleController');

const router = Router();

router.get('/role', RoleController.index);
router.get('/role/:id', RoleController.show);
router.post('/role', RoleController.store);
router.put('/role/:id', RoleController.update);
router.delete('/role/:id', RoleController.remove);

module.exports = router;