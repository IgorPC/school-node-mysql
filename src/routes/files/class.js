const { Router } = require('express');
const ClassController = require('../../controllers/ClassController')

const router = Router();

router.get('/class', ClassController.index);
router.get('/class/:id', ClassController.show);
router.post('/class', ClassController.store);
router.delete('/class/:id', ClassController.delete);
router.put('/class/:id', ClassController.update);

module.exports = router;

