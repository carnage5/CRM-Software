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
        <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg border border-gray-200 shadow-md bg-blue-200 my-3 hover:scale-[1.05]'>
            <p className=" font-normal text-gray-700 ">Query from {props.query.custname}</p>
            <p className=" font-normal text-gray-700 ">{props.query.email}</p>
            <p className='font-normal text-gray-700 mb-2'>{props.query.query}</p>
            <textarea required className="bg-slate-100 my-2 rounded-lg px-2 py-3 placeholder:text-gray-300 w-[60%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" name={props.query._id} value={response} onChange={changeres} placeholder="type your response here" ></textarea>
            <br />
            <button disabled={pr} className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-600' onClick={updateresponse}>Respond</button>
            {pr ? <h1>sending response</h1> : null}
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
            <Menu />
            <h1> Queries</h1>
            <div class="container px-5 py-5 mx-auto">
                <div class="flex flex-wrap justify-center ">
                    {qDisplay ? Query.map((n) => (
                        <SingleQuery key={n._id} query={n} refresh={fetchqueries} />
                    )) : <h1 className='text-center text-xl'>Servers Down</h1>}
                </div>
            </div>
        </div>
    );
}


export default Queries;