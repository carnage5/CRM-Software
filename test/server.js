const express = require('express'); 
const { default: mongoose } = require('mongoose');
// require('dotenv').config() 
const routes=require('./routes');
const cors=require('cors')
const app=express();
//add the following to .env file later
PORT=4000
MONGO_URL="mongodb+srv://crmlogin:crmlogin@cluster0.yahsp.mongodb.net/?retryWrites=true&w=majority"
app.use(cors()) //crossorigin middleware to allow access to server from anywhere
app.use(express.json())//json 
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})//logs all requests to terminal

app.use(routes) //express router 

mongoose.connect(MONGO_URL) //connect to database , then create middleware server
.then(()=>{
    app.listen(PORT,()=>console.log("Server running"))
}).catch((error) => {
    console.log(error)
})
