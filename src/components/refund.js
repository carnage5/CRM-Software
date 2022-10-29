import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Navbar from './navbar';
import Menu from './menu';
const Singlerefund = (props) => {
    const [showr,setshowr]=useState(false)
    const [response,setresponse]=useState("")
    const [pr,setpr]=useState(false)
    const showreason=()=>{
        setshowr(prevshowr=>!prevshowr)
    }
    const changeres=(event)=>{
        const value=event.target.value
        setresponse(value)
    }
    const sendmail=async ()=>{
        const custname=props.refund.custname
        const orderid=props.refund.orderid
        const email=props.refund.email
        const comments = props.refund.comments
        setpr(prevpr=>!prevpr)
        const mail=await fetch('http://localhost:4000/refundresponses',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({custname,orderid,email,comments})
         })
         const json=await mail.json()
         
         if(!mail.ok)
         console.log(json.error)
         else
         alert("mail sent")
    }
    
    const processrefund= async (e)=>{
        if(e.target.name === "accept")
            {props.refund.comments="your refund request has been accepted"
            props.refund.refunded=true
            }
        else if(e.target.name==="reject")
            {props.refund.comments=response
             props.refund.valid=false
            }
            if(props.refund.comments.length!==0)
        {const res= await fetch('http://localhost:4000/refunds/'+props.refund._id,{
            method:"PATCH",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(props.refund)
        })
        const json=await res.json()
        if(!res.ok)
        console.log(json.error)
        else
        {alert(props.refund._id + " processed")
         await sendmail()
         setpr(false)
         props.refresh()
    }}
    else
    alert("response field is empty")
    }
    return ( 
        <div className='ml-5 p-6 max-w-sm rounded-lg border border-gray-200 shadow-md bg-blue-200 my-5'>
            <p className=" font-normal text-gray-700"> name - {props.refund.custname}</p>
            <p className=" font-normal text-gray-700"> order id - {props.refund.orderid}</p>
            <p className=" font-normal text-gray-700"> amount - {props.refund.refundamt}</p>
            <p className="mb-3 font-normal text-gray-700">reason -{props.refund.reason}</p>
            <button disabled = {pr} name="accept" className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-600' onClick={processrefund}>Process</button>
            <button disabled={pr} className=' ml-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-600' onClick={showreason}>Reject</button>
            <br/>
           { showr ? <textarea name={props.refund._id} value={response} onChange={changeres} placeholder='Reason to reject'/> : null}
           <br/>
           { showr ? <button disabled={pr} name="reject" className=' ml-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-600' onClick={processrefund}>Send</button> : null }
            
            {pr ? <h1>sending response</h1>: null}
            <p className="mt-3 font-normal text-xs text-gray-700">{formatDistanceToNow(new Date(props.refund.createdAt),{addSuffix:true})}</p>
        </div>
     );
}

const Refund = () => {
   const [refunds,setrefunds]=useState([])
   const [rDisplay,setrDisplay]=useState(false)
   const fetchrefunds=async ()=>{
    const res=await fetch("http://localhost:4000/refunds")
    const json =await res.json()
    if(res.ok)
        setrefunds([...json])
    setrDisplay(true)
}
    useEffect(()=>{
        fetchrefunds()
        let interval=setInterval(() => {
            fetchrefunds()
            console.log("called")
        }, 60000);
        return ()=>{
            clearInterval(interval)
        }
    },[])
    return ( 
        <div>
            <Navbar loggedin="true"/>
            <Menu/>
            <h1>refund</h1>
            {rDisplay ? refunds.map((r)=>(
                <Singlerefund key={r._id} refund={r} refresh={fetchrefunds}/>
            )) : <h1 className='text-center text-xl'>Servers down</h1>}
        </div>
     );
}
 
export default Refund;