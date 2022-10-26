const express =require('express')
const mongoose=require('mongoose')
const cors=require('cors');
const app=express();
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>res.send("hello"))

const schema =mongoose.Schema;
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
const qm=mongoose.model('queries',queryschema)
const rm=mongoose.model('refunds',refundschema)
app.post('/queries',async (req,res)=>{
    const {custname,email,query}=req.body
    responded=false
    response=""
     console.log(req.body)
     try {
        const q=await qm.create({custname,email,query,responded,response})
        res.status(200).json({ message :"query has been recieved"})
    }catch(error){
        res.status(400).json({error:error.message})
    }
    console.log("query recieved") 
 })
app.get('/queries',async(req,res)=>{
        const qlist=await qm.find({})
        res.status(200).json(qlist)
        console.log("returned queries")

})

app.post('/refunds',async(req,res)=>{
    const {custname,orderid,refundamt,reason}=req.body
    valid=true
    refunded=false
    console.log(req.body)
    try{
        const r=await rm.create({custname,orderid,refundamt,reason,valid,refunded})
        res.status(200).json({message:"refund request has been sent"})
    }catch(error){
        res.status(400).json({error:error.message})
    }
})
app.get('/refunds',async(req,res)=>{
    const rlist=await rm.find({valid:true,refunded:false})
    res.status(200).json(rlist)
    console.log("returned refunds")

})
MONGO_URL="mongodb+srv://crmlogin:crmlogin@cluster0.yahsp.mongodb.net/?retryWrites=true&w=majority"
 mongoose.connect(MONGO_URL) //connect to database , then create middleware server
 .then(()=>{
     app.listen(5000,()=>console.log("Server running"))
 })
