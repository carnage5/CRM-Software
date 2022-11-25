import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Navbar from './navbar';
import Menu from './menu';
const SingleQuery = (props) => {
    const [response, setresponse] = useState("")
    const [pr, setpr] = useState(false)
    const sendmail = async () => {
        const custname = props.query.custname
        const email = props.query.email
        const query = props.query.query
        const response = props.query.response
        setpr(prevpr => !prevpr)
        const mail = await fetch('http://localhost:4000/queryresponses', {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ custname, email, query, response })
        })
        const json = await mail.json()
        if (!mail.ok)
            console.log(json.error)
        else
            alert("mail sent")
    }
    const updateresponse = async () => {
        props.query.responded = true
        props.query.response = response
        if (props.query.response.length !== 0) {
            const res = await fetch('http://localhost:4000/queries/' + props.query._id, {
                method: "PATCH",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(props.query)
            })
            const json = await res.json()
            if (!res.ok)
                console.log(json.error)
            else {
                alert(props.query._id + " updated")
                await sendmail()
                setpr(false)
                props.refresh()
            }
        }
        else
            alert("response field empty")
    }
    const changeres = (event) => {
        const value = event.target.value
        setresponse(value)
    }
    return (
        <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md bg-slate-50 my-3 hover:scale-[1.05]'>
            <p className="mt-1 font-normal text-gray-700 ">Query from {props.query.custname}</p>
            <p className=" font-normal text-gray-700 ">{props.query.email}</p>
            <div className='my-2 w-full max-h-[20%] overflow-y-hidden hover:overflow-y-auto'>
            <p className='font-normal text-gray-700 mb-2'>{props.query.query}</p>
            </div>
            <textarea required className="bg-slate-100 rounded-lg px-2 py-3 placeholder:text-gray-400 w-[60%] lg:w-[60%] border border-1 border-slate-500 focus:border focus:outline-none focus:border-slate-600" name={props.query._id} value={response} onChange={changeres} placeholder="type your response here" ></textarea>
            <br />
            <button disabled={pr} className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-300' onClick={updateresponse}>Respond</button>
            {pr ? <h1>Sending Response....</h1> : null}
            <p className="mt-3 font-normal text-xs text-gray-700">{formatDistanceToNow(new Date(props.query.createdAt), { addSuffix: true })}</p>
        </div>
    );
}

const Queries = () => {
    const [Query, setQuery] = useState([])
    const [qDisplay, setqDisplay] = useState(false)
    const fetchqueries = async () => {
        const res = await fetch('http://localhost:4000/queries')
        const json = await res.json()
        if (res.ok)
            setQuery([...json])
        setqDisplay(true)
    }
    useEffect(() => {
        fetchqueries()
        let interval = setInterval(() => {
            fetchqueries()
            console.log("called")
        }, 60000);
        return () => {
            clearInterval(interval)
        }
    }, []);
    return (
        <div>
            <Navbar loggedin="true" />
            <Menu queries="true"/>
            <div className="container px-5 py-5 mx-auto ">
                <div className="flex flex-wrap justify-center">
                    {qDisplay ? Query.map((n) => (
                        <SingleQuery key={n._id} query={n} refresh={fetchqueries} />
                    )) :  <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg border max-h-56 border-gray-200 shadow-md bg-slate-50 my-3 overflow-y-hidden hover:scale-[1.05] '>
                    <p className=" font-xl text-gray-700">Servers Down</p>
                  
                </div>}
                </div>
            </div>
        </div>
    );
}


export default Queries;