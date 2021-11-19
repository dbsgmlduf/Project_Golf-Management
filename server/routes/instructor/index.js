const router = require("express").Router();
const middlewares = require("../../middlewares/auth");
const controller = require("./controller");

router.get('/request', middlewares.jwtAuth, controller.getRequest);
router.patch('/accept', middlewares.jwtAuth, controller.setAccept);
router.get('/mylearner', middlewares.jwtAuth, controller.getMylist);
router.get('/mylist', middlewares.jwtAuth, controller.getList);
router.post('/classinfo', middlewares.jwtAuth, controller.inputInfo);
router.get('/getinfo/:username/:instructor', middlewares.jwtAuth, controller.getInfo);
router.get('/detailinfo/:username/:session_no', middlewares.jwtAuth, controller.getDetailInfo);
router.patch('/:username/:session_no', middlewares.jwtAuth, controller.updateClassInfo);
router.post('/dateinfo', middlewares.jwtAuth, controller.inputDateInfo);
router.get('/:username', middlewares.jwtAuth, controller.getCertainLecturer);

module.exports = router;
