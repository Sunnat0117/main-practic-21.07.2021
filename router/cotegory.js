const express = require('express');
const router = express.Router();
const {validates, Cotegory} = require('../models/cotegory')

router.post ('/create', async (req, res)=>{
    const {error} =  await validates(req.body)
    if(error) return res.status(400).send(error);
    const cotegory = new Cotegory({
        name : req.body.name
    })
   await cotegory.save();
   res.send(cotegory)        
})

module.exports = router;