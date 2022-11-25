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
    email:{
        type:String,
        required:true 
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
    },
    comments:{
        type:String
    }
},{timestamps:true})
const cust_schema = new schema({
    fax:{
        type : String,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : false
    },
    phone:{
        type : String,
        required : true
    },
    mobile:{
        type : String,
        required : false
    },
    region:{
        type : String,
        required : false
    },
    address:{
        type : String,
        required : true
    },
    country:{
        type : String,
        required : true
    },
    entityId:{
        type : Number,
        required : true
    },
    postalCode:{
        type : String,
        required : true
    },
    companyName:{
        type : String,
        required : true
    },
    contactName:{
        type : String,
        required : true
    },
    contactTitle:{
        type : String,
        required : true
    }
},{timestamps : true})
const sales_schema = new schema({
    freight:{
        type : Number,
        required : true
    },
    entityId:{
        type : Number,
        required : true
    },
    shipCity:{
        type : String,
        required : true
    },
    shipName:{
        type : String,
        required : true
    },
    orderDate:{
        type : String,
        required : true
    },
    shipperId:{
        type : Number,
        required : true
    },
    customerId:{
        type : Number,
        required : true
    },
    employeeId:{
        type : Number,
        required : true
    },
    shipRegion:{
        type : String,
        required : false
    },
    shipAddress:{
        type : String,
        required : true
    },
    shipCountry:{
        type : String,
        required : true
    },
    shippedDate:{
        type : String,
        required : true
    },
    requiredDate:{
        type : String,
        required : true
    },
    shipPostalCode:{
        type : String,
        required : true
    }
},{timestamps : true})

const salesmodel = mongoose.model('Sales_model',sales_schema)
const custmodel = mongoose.model('Cust_model',cust_schema)
const loginmodel=mongoose.model('User',UserSchema)
const qm=mongoose.model('queries',queryschema)
const rm=mongoose.model('refunds',refundschema)
module.exports ={
    custmodel,
    loginmodel,
    qm,
    rm
}