const { Router } = require('express');
const UserController = require('../../controllers/UserController')

const router = Router();

router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.store);
router.delete('/user/:id', UserController.delete);
router.put('/user/:id', UserController.update);
router.get('/user/:id/registrations', UserController.getUserRegistrations);

module.exports = router;

