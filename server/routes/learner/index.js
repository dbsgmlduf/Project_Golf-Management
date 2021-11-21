const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/list', middlewares.jwtAuth, controller.getList);
router.post('/enrollment', middlewares.jwtAuth, controller.setEnrollment);
router.get('/', middlewares.jwtAuth, controller.getStatus);

//추가
router.get('/mylecturer', middlewares.jwtAuth, controller.getMylecturer);
router.get('/classinfo/:username/:instructor', middlewares.jwtAuth, controller.getClassInfo);

module.exports = router;