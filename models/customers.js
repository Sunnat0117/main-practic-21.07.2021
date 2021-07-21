const mongoose =require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        minLengtg : 3,
        kMaxLength : 50,
    },
    phone : {
        type : String,
        required : true,
        minLength : 5,
        kMaxLength :50
    },
    ifVip :{
        type  : Boolean,
        default : false,
        required : true
    }
});

const Customer = mongoose.model("Custumer", customerSchema);


function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        ifVip : Joi.boolean().required()
    })
    return schema.validate(customer )
};
exports.validateCustomer = validateCustomer;
exports.Customer = Customer;