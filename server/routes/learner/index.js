const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/list', middlewares.jwtAuth, controller.getList);
router.post('/enrollment', middlewares.jwtAuth, controller.setEnrollment);

module.exports = router;