const express = require('express') 
const app=express();
app.use((req,res,next)=>{
    console.log(JSON.parse(req));
    next();
})
app.get('/',(req,res,next)=>{
    res.send('welcome ')
})

app.listen(3001)