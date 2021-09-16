const mongoose = require('mongoose');
const Joi = require('joi');

const cotegorySchema =  new mongoose.Schema({
    name: {
        type :  String,
        required : true,
    
    }
});
// const Cotegory = mongoose.model('Cotegory', cotegorySchema)

const Cotegory = mongoose.model('Cotegory', new mongoose.Schema({
    name :{
        type : String,
        required : true,
    }
}))

 function validateCotegory(cotegory) {
    const schema = Joi.object({
        name: Joi.string().required()

    })
        return schema.validate(cotegory);
}   
module.exports = validateCotegory;
module.exports = Cotegory;
module.exports = cotegorySchema
