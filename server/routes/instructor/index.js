const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/classinfo', controller.inputInfo);

module.exports = router;