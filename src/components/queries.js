import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Navbar from './navbar';
import Menu from './menu';
const SingleQuery = (props) => {
    const [showq,setshowq]=useState(false)
    const [response,setresponse]=useState("")
    function display(){
        setshowq(prevshowq=>!prevshowq)
    }
    const updateresponse = async ()=>{
        props.query.responded=true
        props.query.response=response
        const res= await fetch('http://localhost:4000/queries/'+props.query._id,{
            method:"PATCH",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(props.query)
        })
        const json=await res.json()
        if(!res.ok)
        console.log(json.error)
        else
        {alert(props.query._id + " updated")
            props.refresh()
    }
    }
    const changeres=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setresponse(value)
    }
    return ( 
        <div>
        <div className='ml-5 p-6 max-w-sm rounded-lg border border-gray-200 shadow-md bg-blue-200 my-5'>
            <p className=" font-normal text-gray-700 ">Query from {props.query.custname}</p>
            <p className='font-normal text-gray-700 mb-2'>{props.query.query}</p>
            <textarea name={props.query._id} value={response} onChange={changeres} placeholder="type your response here" className='mb-1'></textarea>
            <br/>
            <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-600' onClick={updateresponse}>Respond</button>
            <p className="mt-3 font-normal text-xs text-gray-700">{formatDistanceToNow(new Date(props.query.createdAt),{addSuffix:true})}</p>
        </div>
        </div>
     );
}
 
const Queries = () => {
    const [Query,setQuery]=useState([])
    const [qDisplay,setqDisplay]=useState(false)
    const fetchqueries=async()=>{
        const res=await fetch('http://localhost:4000/queries')
        const json =await res.json()
        if(res.ok)
            setQuery([...json])
        setqDisplay(true)
    }
    useEffect(()=>{
        fetchqueries()
        let interval=setInterval(() => {
            fetchqueries()
            console.log("called")
        }, 1000);
        return ()=>{
            clearInterval(interval)
        }
    },[]);
    return ( 
        <div>
            <Navbar loggedin="true"/>
            <Menu/>
            <h1> Queries</h1>
            {qDisplay ? Query.map((n)=>(
                <SingleQuery key={n._id} query={n} refresh={fetchqueries}/>
            )) : <h1 className='text-center text-xl'>Servers Down</h1>}
        </div>
     );
}
 
 
export default Queries;