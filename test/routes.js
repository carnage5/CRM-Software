//routes and functions to be called from server.js
const express = require('express')
const router = express.Router()
const {loginmodel,qm,rm}=require('./model')
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
router.get('/queries',async(req,res)=>{
    const qlist=await qm.find({})
    res.status(200).json(qlist)
    console.log("returned queries")

})
router.post('/queries',async (req,res)=>{
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
router.get('/refunds',async(req,res)=>{
    const rlist=await rm.find({valid:true,refunded:false})
    res.status(200).json(rlist)
    console.log("returned refunds")

})
router.post('/refunds',async(req,res)=>{
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
// router.get('/login',async (req,res)=>{
//     const data=await loginmodel.find({})
//     res.status(200).json(data)
// })

var MongoClient = require('mongodb').MongoClient
const CONNECTION_URL = 'mongodb+srv://crmadmin:crmadmin@cluster0.oxbvxcb.mongodb.net/test'
const PORT = 4000

router.post('/getData', (req, res) => {
    // in this function, the user requests for data in a particular collection
    // req.body has an element dataChoice, which holds the name of the required collection

    console.log("inside getData")
    console.log("req.body in /getData", req.body)

    MongoClient.connect(CONNECTION_URL, (err, client) => {
        if (err) throw err
        console.log("connected")

        var collectionName = req.body.dataChoice // so that we can access the collection the user chose

        var dbo = client.db('CRM_Data')
        dbo.collection(collectionName).find({}).toArray(function (err, results) {
            if (err) throw err

            if (results) {
                console.log("Results found")
                console.log(results)
                res.send({'data' : results})
            }
            else {
                console.log("Something went wrong with the database")
                res.send({'message' : 'internal server error'})
            }

            client.close();
        })
    })
})

router.post('/getData', (req, res) => {
    // in this function, the user requests for data in a particular collection
    // req.body has an element dataChoice, which holds the name of the required collection

    console.log("inside getData")
    console.log("req.body in /getData", req.body)

    MongoClient.connect(CONNECTION_URL, (err, client) => {
        if (err) throw err
        console.log("connected")

        var collectionName = req.body.dataChoice // so that we can access the collection the user chose

        var dbo = client.db('CRM_Data')
        dbo.collection(collectionName).find({}).toArray(function (err, results) {
            if (err) throw err

            if (results) {
                console.log("Results found")
                console.log(results)
                res.send({'data' : results})
            }
            else {
                console.log("Something went wrong with the database")
                res.send({'message' : 'internal server error'})
            }

            client.close();
        })
    })
})

router.post('/dataVisReq', (req, res) => {
    // in this function, the percentage the user wants to visualize is computed and sent to the frontend
    // req.body has a dataVisCategory that represents which percentage to send to the frontend for the progress bar

    console.log("Inside /dataVisReq")
    console.log("req.body.dataVisCategory", req.body.dataVisCategory)

    if (req.body.dataVisCategory == 'pofo') {
        // pofo is percentage of fulfilled orders
        MongoClient.connect(CONNECTION_URL, (err, client) => {
            if (err) throw err
            
            var dbo = client.db('CRM_Data')
            dbo.collection('salesOrder').find({}).toArray(function (err, results) {
                if (err) throw err;

                if (results) {
                    console.log("Data retrieved from database")
                    var percentage = results.filter(function (element) {
                        return element.shippedDate == null;
                    })
                    console.log(percentage.length)
                    percentage = (percentage.length / results.length) * 100;
                    res.send({'val' : 100 - percentage})
                }
                else {
                    console.log("Database error")
                }
                client.close()
            })
        })
    }
    else {
        MongoClient.connect(CONNECTION_URL, (err, client) => {
            if (err) throw err
            // this section is to retrieve what percentage of the products were sold at MRP
            var dbo = client.db('CRM_Data')
            dbo.collection('orderDetail').find({}).toArray(function (err, results) {
                if (err) throw err;
                
                if (results) {
                    console.log("Data retrieved from database")
                    var percentage = results.filter(function (element) {
                        return element.discount == 0;
                    })
                    console.log(percentage.length)
                    percentage = (percentage.length / results.length) * 100;
                    res.send({'val' : percentage})
                }
                else {
                    console.log("Database error")
                }
                client.close()
            })
        })
    }
})

router.post('/getPieChart', (req, res) => {
    // in this function, the data needed for the pie chart is sent to the frontend
    // req.body.pieChart represents which pie chart the user wants to see
    console.log("inside getPieChart")
    console.log('req.body.pieChart = ', req.body.pieChart)

    if (req.body.pieChart == 'emp') {
        // this block is to retieve data grouped by employeeId
        MongoClient.connect(CONNECTION_URL, (err, client) => {
            if (err) throw err
            var dbo = client.db('CRM_Data')
            dbo.collection('GroupByEmpId').find({}).toArray(function (err, results) {
                if (err) throw err
                if (results) {
                    console.log("Data retrieved")
                    results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                    console.log(results)
                    res.send({'groupedData' : results})
                }
                else {
                    console.log("Database error")
                }
                client.close()
            })
        })
    }
    else {
        // this block is to retrieve data grouped by customerId
        MongoClient.connect(CONNECTION_URL, (err, client) => {
            if (err) throw err
            var dbo = client.db('CRM_Data')
            dbo.collection('GroupByCustId').find({}).toArray(function (err, results) {
                if (err) throw err
                if (results) {
                    console.log("Data retrieved")
                    results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                    res.send({'groupedData' : results})
                }
                else {
                    console.log("Database error")
                }
                client.close()
            })
        })
    }
})

router.get('/reportData', (req, res) => {
    // this function sends the data needed for report to the frontend
    // there is no req.body since it is a get request

    console.log("Inside /reportData")
    resObj = { // this object will finally be sent to the frontend when everything is ready
        mfsc : [], // most frequently shipped country
        totalRevenue : 0,
        avgUP: 0, // average unit price
        mvc: [], // most valuable customers
        mve: [], // most valuable employees
        cwms: [], // country with most number of suppliers
        msp: [] // most sold products
    }
    MongoClient.connect(CONNECTION_URL, (err, client) => {
        if (err) throw err

        var dbo = client.db('CRM_Data')
        // get mfsc
        dbo.collection('MostFreqCountry').find({}).toArray(function (err, results) {
            if (err) throw err
            if (results) {
                console.log('Results fetched')
                results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                resObj.mfsc = results.slice(0, 3)
                console.log("mfsc", resObj.mfsc)
            }
            else {
                console.log('Database error')
            }
            //get totalRevenue
            dbo.collection('orderDetail').find({}).toArray(function (err, results) {
                if (err) throw err
                if (results) {
                    console.log('Data retrieved')
                    results.forEach(function (element) {
                        resObj.totalRevenue += (element.quantity * element.unitPrice)
                    })
                }
                else {
                    console.log("Database Error")
                }

                // get avgUP
                dbo.collection('product').find({}).toArray(function (err, results) {
                    if (err) throw err
                    if (results) {
                        console.log('Data retrieved')
                        results.forEach(function (element) {
                            resObj.avgUP += (element.unitPrice)
                        })
                        resObj.avgUP /= results.length
                    }
                    else {
                        console.log("Database Error")
                    }

                    // get mvc
                    dbo.collection('GroupByCustId').find({}).toArray(function (err, results) {
                        if (err) throw err
                        if (results) {
                            console.log('Data retrieved')
                            results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                            resObj.mvc = results.splice(0, 3)
                        }
                        else {
                            console.log("Database Error")
                        }

                        // get mve
                        dbo.collection('GroupByEmpId').find({}).toArray(function (err, results) {
                            if (err) throw err
                            if (results) {
                                console.log('Data retrieved')
                                results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                                resObj.mve = results.splice(0, 3)
                            }
                            else {
                                console.log("Database Error")
                            }

                            // get cwms
                            dbo.collection('CountriesWithMostSuppliers').find({}).toArray(function (err, results) {
                                if (err) throw err
                                if (results) {
                                    console.log('Data retrieved')
                                    results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                                    resObj.cwms = results.splice(0, 3)
                                }
                                else {
                                    console.log("Database Error")
                                }

                                // get msp
                                dbo.collection('NumberOfUnitsSold').find({}).toArray(function (err, results) {
                                    if (err) throw err
                                    if (results) {
                                        console.log('Data retrieved')
                                        results.sort((a, b) => (a.count < b.count) ? 1 : -1)
                                        resObj.msp = results.splice(0, 3)
                                        console.log("Sending response")
                                        res.send(resObj)
                                    }
                                    else {
                                        console.log("Database Error")
                                    }
                                    client.close()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})















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
