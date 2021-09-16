const mongoose = require('mongoose');
const {Course, validate} = require('../models/courses');
const {Cotegory} = require('../models/cotegory');
const express = require('express');
const router = express.Router();
const auth = require('../middlewere/auth');

router.get('/', async (req, res )=>{
    const course = await Course.find().sort({title});

    if(!course) return res.status(404).send('course not found');
    res.status(200).send(course)
});
    
router.post('/create',auth, async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const cotegory = await Cotegory.findById(req.body.cotegory)
    if(!course) return res.status(404).send('not found')
    const course =  new Course({
       title :  req.body.title,
       cotegory : req.body.cotegoryId,
    //    { 
    //       _id : cotegory._id,
    //       name :cotegory.name
    //    },
       trainer : req.body.trainer,
       tags : req.body.tags,
       status : req.body.status

    })
    course = await course.save();
    res.status(201).send(course);

})
module.exports = router;