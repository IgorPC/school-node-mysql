const { Router } = require('express');
const RegistrationController = require('../../controllers/RegistrationController')

const router = Router();

router.get('/registration', RegistrationController.index);
router.get('/registration/:id', RegistrationController.show);
router.post('/registration', RegistrationController.store);
router.delete('/registration/:id', RegistrationController.delete);
router.put('/registration/:id', RegistrationController.update);

module.exports = router;

