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
const queryschema=new schema({
    custname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true
    },
    responded:{
        type:Boolean
    },
    response:{
        type:String
    }
},{timestamps:true})
const refundschema = new schema({
    custname:{
        type:String,
        required: true
    },
    orderid:{
        type:String,
        required:true
    },
    refundamt:{
        type:Number,
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    valid:{
        type:Boolean,
    },
    refunded:{
        type:Boolean,
    }
},{timestamps:true})
const loginmodel=mongoose.model('User',UserSchema)
const qm=mongoose.model('queries',queryschema)
const rm=mongoose.model('refunds',refundschema)
module.exports ={
    loginmodel,
    qm,
    rm
}