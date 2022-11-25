import { useState } from "react"
const Deletecust = () => {
    const [custid, setCustid] = useState('')
    const [error, setError] = useState('')
 

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/custdelete', {
            method: 'POST',
            body: JSON.stringify({"entityId":custid}),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()
        console.log(json)
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCustid('')
            setError(null)
            console.log("Customer deleted", json)
            alert("Customer Succesfully deleted")
        }

    }
    return (
        <div className="flex justify-center w-full bg-slate-300 rounded-xl">
            <div className="flex  flex-col justify-center items-center max-w-7xl w-[90%]">
                <div className="flex flex-col justify-center text-center space-y-3 my-5">
                    <h1 className="text-xl md:text-xl font-semibold tracking-widest">Delete Customer</h1>
                </div>
                <div className=" flex flex-col justify-center lg:flex-row w-1/3 items-center lg:space-x-5 xl:space-x-24 ">
                    <form
                    onSubmit={handleSubmit}
                        className=" bg-slate-200 flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                            <h1>Customer Id</h1>
                            <input
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"
                                type="text"
                                onChange={(e) => setCustid(e.target.value)}
                                value={custid}
                                required
                            />
                        </div>
                        {/* <input type="submit" className="text center bg-blue-500 my-2 px-3 py-1 text-white rounded-md"></input> */}
                        {error && <div className="text-center text-red-500 font-semibold ">{error}</div>}
                        <div className="text-center md:text-centre lg:text-centre">
                            <button type="submit" className="bg-slate-700 my-2 px-3 py-1 text-white rounded-md hover:bg-slate-500" >Delete customer</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )

}

export default Deletecust

