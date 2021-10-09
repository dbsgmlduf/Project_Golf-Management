const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/', async(req, res) => {
    const { usertype, username, email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        User.create({
            usertype: usertype,
            name: username,
            email: email,
            password: hash,
        });
        res.json("SUCCESS!!");
    });
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