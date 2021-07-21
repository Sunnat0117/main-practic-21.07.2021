const express = require('express');
const router = express.Router();
const {User , validate} = require('../models/user');
const _ = require('lodash')
const bcrypt = require('bcrypt')
const auth  = require('../middlewere/auth')

router.get("/me",auth,  async (req, res)=>{
    const user = await User.findById(req.body._).select('-password');
    if(!user) return res.status(404).send('not found')

    res.status(200).send(user);
})
router.post('/create' ,async (req, res)=>{
    const {error}= await validate(req.body);
    if(error) return res.status(404).send(error.details[0].message)
    
    let user = await User
    .findOne({ email : req.body.email})

    if(user) {
         return res.status(400).send(user.error)
        }

     user = new User(_.pick(req.body  ,
         [
             "name",
             'email', 
             'password'
         ]
          ));   

    const salt = await bcrypt.genSalt();
     user.password = await bcrypt.hash(user.password, salt)
    const result = await user.save();
    res.status(201).send(_.pick(result, ["name", "email", "password"]))
    });


    module.exports =router;