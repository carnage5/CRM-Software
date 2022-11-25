// const express =require('express')
// const mongoose=require('mongoose')
// const cors=require('cors');
// const app=express();
const nodemailer=require('nodemailer')
// app.use(cors())
// app.use(express.json())
// app.get('/',(req,res)=>res.send("hello"))
// const contactemail={
//     host: 'smtp.gmail.com',
//     port:'465',
//     secure:true,
//     auth:{
        
//     },
// }
// const contact=nodemailer.createTransport(contactemail)
// contact.verify((error,success)=>{
//     if(error)
//     console.log(error)
//     else
//     console.log("ready to send mail")
// })

// app.post('/queryresponse',(req,res)=>{
//     const mail = {
//         from:"pes1ug20cs055@pesu.pes.edu",
//         to:"pes1ug20cs012@pesu.pes.edu", 
//         subject: 'New Contact Form Submission',
//         text: `helloworld`,
//         }
//         contact.sendMail(mail, (err, data) => {
//             if (err) {
//                 res.json({
//                     status: 'fail',
//                 })
//             } else {
//                 res.json({
//                     status: 'success',
//                 })
//             }
//         })
    
// })



// app.listen(5000,()=>console.log("server running"))

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'crm.company.reply@gmail.com',
      pass:'arvvssfpaxlqskpu'
    }
  });
  
  var mailOptions = {
    from: 'crm.company.reply@gmail.com',
    subject: 'Congrats Winner',
  };
  console.log(mailOptions.text)
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  