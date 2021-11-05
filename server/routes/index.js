const router = require('express').Router();
const userRouter = require('./user');
const instructorRouter = require('./instructor');
const learnerRouter = require('./learner');

router.use('/users', userRouter);
//router.use('/instructors', instructorRouter);

router.use('/learners', learnerRouter);
//router.use('/instructors', instructorRouter);
module.exports = router;