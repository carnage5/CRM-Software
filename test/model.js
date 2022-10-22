//schema for user login details
const mongoose=require('mongoose')
const schema = mongoose.Schema
const UserSchema=new schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true
    }
})

module.exports =mongoose.model('User',UserSchema)