import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Navbar from './navbar';
import Menu from './menu';
const Singlerefund = (props) => {
    return ( 
        <div className='ml-5 p-6 max-w-sm rounded-lg border border-gray-200 shadow-md bg-blue-200 my-5'>
            <p className=" font-normal text-gray-700">{props.refund.custname}</p>
            <p className=" font-normal text-gray-700">{props.refund.orderid}</p>
            <p className=" font-normal text-gray-700">{props.refund.refundamt}</p>
            <p className="mb-3 font-normal text-gray-700">{props.refund.reason}</p>
            <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-600'>Process</button>
            <p className="mt-3 font-normal text-xs text-gray-700">{formatDistanceToNow(new Date(props.refund.createdAt),{addSuffix:true})}</p>
        </div>
     );
}

const Refund = () => {
   const [refunds,setrefunds]=useState([])
   const [rDisplay,setrDisplay]=useState(false)
    useEffect(()=>{
        const fetchrefunds=async ()=>{
            const res=await fetch("http://localhost:4000/refunds")
            const json =await res.json()
            console.log(json)
            if(res.ok)
                setrefunds([...json])
            setrDisplay(true)
        }
        let interval=setInterval(() => {
            fetchrefunds()
            console.log("called")
        }, 60000);
        fetchrefunds()
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
                <Singlerefund key={r._id} refund={r}/>
            )) : <h1 className='text-center text-xl'>Servers down</h1>}
        </div>
     );
}
 
export default Refund;