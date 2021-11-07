const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/requestenroll', middlewares.jwtAuth, controller.getRequest);
router.patch('/agreement', middlewares.jwtAuth, controller.setAgreement);
router.get('/classinfo', controller.inputInfo);

module.exports = router;