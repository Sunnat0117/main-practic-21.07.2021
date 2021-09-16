const express = require('express');
const router = express.Router();
const {validateCotegory1, Cotegory} = require('../models/cotegory')
const auth = require('../middlewere/auth')

router.get('/', async(req, res)=>{
    const cotegory = await Cotegory.find();
    if(!cotegory) return res.status(400).send('not found')
    res.status(200).send(cotegory);
})
router.post ('/create', auth, async (req, res)=>{
    const {error} =  await validateCotegory1(req.body)
    if(error) return res.status(400).send(error);
    const cotegory = new Cotegory({
        name : req.body.name
    })
   await cotegory.save();
   res.send(cotegory)        
});

router.get('/:id', (req,res)=>{
    const cotegory = Cotegory.findById(req.param.id);
    if(!cotegory) res.status(404).send('not found cotegory');
    res.status(200).send(cotegory);
})
module.exports = router;
