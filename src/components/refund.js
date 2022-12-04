import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Navbar from './navbar';
import Menu from './menu';
const Singlerefund = (props) => {
    const [showr, setshowr] = useState(false)
    const [response, setresponse] = useState("")
    const [pr, setpr] = useState(false)
    const showreason = () => {
        setshowr(prevshowr => !prevshowr)
    }
    const changeres = (event) => {
        const value = event.target.value
        setresponse(value)
    }
    const sendmail = async () => {
        const custname = props.refund.custname
        const orderid = props.refund.orderid
        const email = props.refund.email
        const comments = props.refund.comments
        setpr(prevpr => !prevpr)
        const mail = await fetch('http://localhost:4000/refundresponses', {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ custname, orderid, email, comments })
        })
        const json = await mail.json()

        if (!mail.ok)
            console.log(json.error)
        else
            alert("mail sent")
    }

    const processrefund = async (e) => {
        if (e.target.name === "accept") {
            props.refund.comments = "your refund request has been accepted"
            props.refund.refunded = true
        }
        else if (e.target.name === "reject") {
            props.refund.comments = response
            props.refund.valid = false
        }
        if (props.refund.comments.length !== 0) {
            const res = await fetch('http://localhost:4000/refunds/' + props.refund._id, {
                method: "PATCH",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(props.refund)
            })
            const json = await res.json()
            if (!res.ok)
                console.log(json.error)
            else {
                alert(props.refund._id + " processed")
                await sendmail()
                setpr(false)
                props.refresh()
            }
        }
        else
            alert("response field is empty")
    }
    return (
        <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg border max-h-56 border-gray-200 shadow-md bg-slate-50 my-3 overflow-y-hidden hover:scale-[1.05] hover:overflow-y-auto '>
            <p className=" font-normal text-gray-700"> name - {props.refund.custname}</p>
            <p className=" font-normal text-gray-700"> order id - {props.refund.orderid}</p>
            <p className=" font-normal text-gray-700"> amount - {props.refund.refundamt}</p>
            <p className="mb-3 font-normal text-gray-700">reason -{props.refund.reason}</p>
            <button disabled={pr} name="accept" className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-300 ' onClick={processrefund}>Process</button>
            <button disabled={pr} className=' ml-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-300 ' onClick={showreason}>Reject</button>
            <br />
            {showr ? <textarea className="bg-slate-100 mt-2 rounded-lg px-2 py-3 placeholder:text-gray-400 w-[60%] lg:w-[60%]  border border-1 border-slate-500 focus:border focus:outline-none  focus:border-slate-600" name={props.refund._id} value={response} onChange={changeres} placeholder='Reason to reject' /> : null}
            <br />
            {showr ? <button disabled={pr} name="reject" className='w-[20%] inline-flex justify-center py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-300' onClick={processrefund}>Send</button> : null}
            {pr ? <h1>Sending Response...</h1> : null}
            <p className="mt-1 font-normal text-xs text-gray-700">{formatDistanceToNow(new Date(props.refund.createdAt), { addSuffix: true })}</p>
        </div>
    );
}

const Refund = () => {
    const [refunds, setrefunds] = useState([])
    const [rDisplay, setrDisplay] = useState(false)
    const fetchrefunds = async () => {
        const res = await fetch("http://localhost:4000/refunds")
        const json = await res.json()
        if (res.ok)
            setrefunds([...json])
        setrDisplay(true)
    }
    useEffect(() => {
        fetchrefunds()
        let interval = setInterval(() => {
            fetchrefunds()
            console.log("called")
        }, 60000);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <Navbar loggedin="true" />
            <Menu refunds="true"/>
            <div className="container px-5 py-5 mx-auto ">
                <div className="flex flex-wrap justify-center ">
                    {rDisplay ? refunds.map((r) => (
                        <Singlerefund key={r._id} refund={r} refresh={fetchrefunds} />
                    )) : <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg border max-h-56 border-gray-200 shadow-md bg-slate-50 my-3 overflow-y-hidden hover:scale-[1.05] '>
                    <p className=" font-xl text-gray-700">Servers Down</p>  
                </div> }
                </div>
            </div>

        </div>
    );
}

export default Refund;