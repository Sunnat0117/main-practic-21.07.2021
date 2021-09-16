const mongoose = require('mongoose');
const Joi = require('joi');
const { string, boolean } = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password :String,
    isAdmin : Boolean
})
userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id : this._id, isAdmin: this.isAdmin}, config.get('jwtPriveteKey'))
    return token;
}
const User = mongoose.model("User", userSchema );
function userValidate(user){
    const schema = Joi.object({
        name : Joi.string().required(),
        email : Joi.string().required().email(),
        password : Joi.string() ,
        isAdmin : Joi.boolean().required()

    })
    return schema.validate(user)
}

exports.User = User;
exports.validate = userValidate;

