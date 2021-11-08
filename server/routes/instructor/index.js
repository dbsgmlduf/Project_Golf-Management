const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/requestenroll', middlewares.jwtAuth, controller.getRequest);
router.patch('/agreement', middlewares.jwtAuth, controller.setAgreement);
router.get('/mylearnerlist', middlewares.jwtAuth, controller.getMylist);
router.get('/mylist', middlewares.jwtAuth, controller.getList);
router.post('/classinfo', middlewares.jwtAuth, controller.inputInfo);
router.get('/getinfo', middlewares.jwtAuth, controller.getInfo);
module.exports = router;