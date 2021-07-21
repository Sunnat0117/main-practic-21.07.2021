const  express = require('express');
const { required } = require('joi');
const router = express.Router();
const {validateCustomer , Customer} = require("../models/customers")

router.get('/',async (req, res)=>{
    const customers = await Customer.find().sort('name');
    res.status(200).send(customers)
})

router.post('/create', async (req, res)=>{
    const {error} = await validateCustomer(req.body)
    if(error) return res.status(400).send( error.details[0].message)
    const customer = new Customer({
        name : req.body.name,
        phone : req.body.phone,
        ifVip : req.body.ifVip
    })
    customers = await customer.save();
    res.status(201).send(customers)
});

// get by id so'rovini qilish kk
// put by id so'rovini qilish
// delete by id so'rovi


router.get('/all', async (req, res) =>{
        const  customer = await Customer.find();
        res.status(200).send(customer);

});


router.put('/update/:id', async (req ,res )=>{
    const customer = await Customer.findById(req.params.id);

    customer.name =  req.body.name;
    res.status(201).send(customer);
    await customer.save();
})


router.delete('/delete/:id', async (req ,res )=>{
    const customer  = await Customer.findByIdAndRemove(req.params.id);

    if(!customer) return res.status(404).send("not found");
    res.send(customer)
})

module.exports = router;

