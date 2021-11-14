const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/request', middlewares.jwtAuth, controller.getRequest);
router.patch('/accept', middlewares.jwtAuth, controller.setAccept);
router.get('/mylearner', middlewares.jwtAuth, controller.getMylist);
router.get('/mylist', middlewares.jwtAuth, controller.getList);
router.post('/classinfo', middlewares.jwtAuth, controller.inputInfo);
router.get('/getinfo/:username', middlewares.jwtAuth, controller.getInfo);
router.patch('/:username', middlewares.jwtAuth, controller.updateClassInfo);
router.delete('/:username', middlewares.jwtAuth, controller.deleteClassInfo);

module.exports = router;