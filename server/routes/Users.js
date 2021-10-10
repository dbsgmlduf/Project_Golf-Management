const express = require('express');
const router = express.Router();
const { Instructor } = require('../models');
const { Learner } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//instructor register API
router.post('/instructorReg', async(req, res) => {
    const { usertype, email, id, password, nickname, confirm_auth } = req.body;
    try{
        const hash = await bcrypt.hash(password, 10);
        await Instructor.create({
            usertype: usertype,
            email: email,
            id: id,
            password: hash,
            nickname: nickname,
            confirm_auth: confirm_auth,
        });
        res.json("INSTRUCTOR REGISTER SUCCESS!!");
        
    } catch (error){
        console.log(error);
    }
});

//learner register API
router.post('/learnerReg', async(req, res) => {
    const { usertype, email, id, password, nickname } = req.body;
    try{
        const hash = await bcrypt.hash(password, 10);
        await Learner.create({
            usertype: usertype,
            email: email,
            id: id,
            password: hash,
            nickname: nickname,
        });
        res.json("LEARNER REGISTER SUCCESS!!");
        
    } catch (error){
        console.log(error);
    }
});


router.post('/login', passport.authenticate('local', {session: false}),
async (req, res, error) => {
    const user = req.body
        const accessToken = jwt.sign(
                { email: user.email },
                process.env.JWT_ACCESS_TOKEN_SECRET
            );
        res.json({
            message: "LOGIN SUCCESS!",
            accessToken
        });
});

// router.post('/learnerReg', async(req, res) => {
//     const { usertype, email, id, password, nickname } = req.body;
//     bcrypt.hash(password, 10).then((hash) => {
//         Learner.create({
//             usertype: usertype,
//             email: email,
//             id: id,
//             password: hash,
//             nickname: nickname,
//         });
//         res.json("LEARNER REGISTER SUCCESS!!");
//     });
// });

//res 여러개 = ERR_HTTP_HEADERS_SENT
// router.post('/login', async(req, res) => {
//     const {email, password} = req.body;
//     const user = await User.findOne({where: {email: email}});
//     if(!user){
//         res.json({error:"USER DOSEN'T EXIST!"});
//     }
//     bcrypt.compare(password, user.password).then((match) => {
//         if(!match){
//             //return res.json({error: "WRONG USERNAME & PASSWORD!"});
//         }
//         //return res.json("YOU LOGGED IN!!");
//     });

//     const accessToken = jwt.sign(
//         { email: user.email },
//         process.env.JWT_ACCESS_TOKEN_SECRET
//     );
    
//     res.json({message: "FUCKING TOKEN!", token: accessToken});
// });


module.exports = router;