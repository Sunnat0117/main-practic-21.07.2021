const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { User } = require('../models/user');


router.post('/', async (req, res)=>{

    const { error } = await validate(req.body);
    if(error){
        return res.status(404).send('not found password or email 1');
    }
    const user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(404).send('not found password or email 2');     
    }
    // console.log(user.password);
    const isValidatePwd =  await bcrypt.compare(req.body.password, user.password);
    if(!isValidatePwd){
        return res.status(404).send('not found password or email 3')
    } else {
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send({user: user, token: token});
    return res.status(200).json({user});
    
    }});



function validate(req){
    const schema = Joi.object({
        email:Joi.string().required().min(2).max(27),
        password:Joi.string().required().min(2).max(27),

    });    
    return schema.validate(req)
}
module.exports = router;




