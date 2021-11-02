const router = require('express').Router();
const userRouter = require('./user');
const instructorRouter = require('./instructor');

router.use('/users', userRouter);
//router.use('/instructors', instructorRouter);

module.exports = router;