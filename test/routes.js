//routes and functions to be called from server.js
const express = require('express')
const router = express.Router()
const loginmodel=require('./model')
//get request to test server
router.get('/',(req,res)=>{
    res.json({message:'welcome to server'})
})

//post login details to server
router.post('/login',async (req,res)=>{
    const {email,password}=req.body
    try{
    const data=await loginmodel.findOne({email})
    if(!data){
        throw Error('Email not registered')
    }
    if(data.password != password)
    {
        throw Error('incorrect password')
    }
    res.status(200).json(data.email)
}
catch(error) {
    res.status(400).json({error:error.message})
}
})

// router.get('/login',async (req,res)=>{
//     const data=await loginmodel.find({})
//     res.status(200).json(data)
// })

module.exports=router
/*
useful for adding credentials to database
router.post('/login',async (req,res)=>{
    const {email,password}=req.body
    console.log(req.body)
    try {
        const user=await loginmodel.create({email,password})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({message:'posted to /login'})
})
*/