const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

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

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email: email}});
    if(!user){
        res.json({error:"USER DOSEN'T EXIST!"});
    }
    bcrypt.compare(password, user.password).then((match) => {
        if(!match){
            res.json({error: "WRONG USERNAME & PASSWORD!"});
        }
        res.json("YOU LOGGED IN!!");
    });
});

module.exports = router;