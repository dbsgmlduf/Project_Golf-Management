const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.post('/enrollment', middlewares.jwtAuth, controller.enrollLecturer);

module.exports = router;