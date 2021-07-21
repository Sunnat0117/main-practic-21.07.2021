const mongoose = require('mongoose');
const Joi = require('joi');
const {cotegorySchema} = require('./cotegory')


// const cotegorySchema = new mongoose.Schema({
//     name :{
//         type : String,
//         required : true,
//     }
// });
// const Cotegory = mongoose.model('Cotegory', cotegorySchema )


const Course =  mongoose.model('Courses ', new mongoose.Schema({
     title : {
        type: String,
        required : true,
        
    },
    cotegory : {
            type : String,
            // required : true
    },
    trainer:{
        type: String,
        required : true
    },
    tags:{
        type:[String]
    },

    status : {
        type: String,
        enum :['Active', "Inactive"],
        required: true
    }    
}));
// const Course = mogoo se.model("Course",courseSchema )

function courseValidate (course){
    const schema = Joi.object({
        title: Joi.string().required().min(5).max(80),
        cotegory : Joi.string().required(),
        trainer : Joi.string().required(),
        status:  Joi.string().required(),
        tags: Joi.array().items(Joi.string())

    })
    return schema.validate(course)
}


    exports.Course = Course;
    exports.validate = courseValidate;

