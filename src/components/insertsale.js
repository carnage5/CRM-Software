import { useState } from "react"


const SaleForm = () => {
    const [freight, setFreight] = useState('')
    const [entityId, setEntityId] = useState('')
    const [shipCity, setShipCity] = useState('')
    const [shipName, setShipName] = useState('') 
    const [orderDate, setOrderDate] = useState('')
    const [shipperId, setShipperId] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [shipRegion, setShipRegion] = useState('')
    const [shipAddress, setShipAddress] = useState('')
    const [shipCountry, setShipCountry] = useState('')
    const [shippedDate, setShippedDate] = useState('')
    const [requiredDate, setRequiredDate] = useState('')
    const [shipPostalCode, setShipPostalCode] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newsale = { freight, entityId, shipCity, shipName, orderDate, shipperId, customerId, employeeId, shipRegion, shipAddress, shipCountry, shippedDate, requiredDate, shipPostalCode }
        if(requiredDate<orderDate || requiredDate<shippedDate || shippedDate<orderDate){
            alert("Please enter accurate dates")}
        const response = await fetch('http://localhost:4000/saleinsert', {
            method: 'POST',
            body: JSON.stringify(newsale),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setFreight('')
            setEntityId('')
            setShipCity('')
            setShipName('')
            setOrderDate('')
            setShipperId('')
            setCustomerId('')
            setEmployeeId('')
            setShipRegion('')
            setShipAddress('')
            setShipCountry('')
            setShippedDate('')
            setRequiredDate('')
            setShipPostalCode('')
            setError(null)
            console.log("New Sale added", json)
            alert("Sale Succesfully added")


        }
    }

    return (
        <div className="flex justify-center bg-slate-300 rounded-xl w-full">
            <div className="flex  flex-col justify-center items-center max-w-7xl w-[90%]">
                <div className="flex flex-col justify-center text-center space-y-3 my-5">
                    <h1 className="text-xl md:text-xl font-semibold tracking-widest">Add Sale</h1>
                </div>
                <div className=" flex flex-col justify-center lg:flex-row w-1/3 items-center lg:space-x-5 xl:space-x-24 ">
                    <form onSubmit={handleSubmit}
                        className=" bg-slate-200 rounded-md flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                            <h1>Freight</h1>
                            <input
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"
                                type="number"
                                onChange={(e) => setFreight(e.target.value)}
                                value={freight}
                            />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Entity Id</h1>
                            <input 
                                type="number"
                                min="0"
                                required
                                onChange={(e) => setEntityId(e.target.value)}
                                value={entityId}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship City</h1>
                            <input
                                type="text"
                                required
                                onChange={(e) => setShipCity(e.target.value)}
                                value={shipCity}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Name</h1>
                            <input 
                                type="text"
                                required
                                onChange={(e) => setShipName(e.target.value)}
                                value={shipName}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Order date</h1>
                            <input 
                                type="datetime-local"
                                required
                                onChange={(e) => setOrderDate(e.target.value)}
                                value={orderDate}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Shipper id</h1>
                            <input 
                                type="number"
                                min="0"
                                required
                                onChange={(e) => setShipperId(e.target.value)}
                                value={shipperId}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Customer Id</h1>
                            <input 
                                type="number"
                                min="0"
                                required
                                onChange={(e) => setCustomerId(e.target.value)}
                                value={customerId}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Employee Id</h1>
                            <input 
                                type="number"
                                min="0"
                                required
                                onChange={(e) => setEmployeeId(e.target.value)}
                                value={employeeId}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Region</h1>
                            <input type="text"
                                onChange={(e) => setShipRegion(e.target.value)}
                                value={shipRegion}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Country</h1>
                            <input 
                                type="text"
                                required
                                onChange={(e) => setShipCountry(e.target.value)}
                                value={shipCountry}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Shipped date </h1>
                            <input 
                                type="datetime-local"
                                required
                                onChange={(e) => setShippedDate(e.target.value)}
                                value={shippedDate}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Required Date</h1>
                            <input 
                                type="datetime-local"
                                required
                                onChange={(e) => setRequiredDate(e.target.value)}
                                value={requiredDate}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Postal Code</h1>
                            <input 
                                type="number"
                                min="0"
                                required
                                onChange={(e) => setShipPostalCode(e.target.value)}
                                value={shipPostalCode}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Address</h1>
                            <textarea 
                                type="text"
                                required
                                onChange={(e) => setShipAddress(e.target.value)}
                                value={shipAddress} cols="10" rows="3"
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"></textarea>
                        </div>
                        {/* <input type="submit" className="text center bg-blue-500 my-2 px-3 py-1 text-white rounded-md"></input> */}
                        {error && <div className="text-center text-red-600 font-semibold ">{error}</div>}
                        <div className="text-center md:text-centre lg:text-centre">
                            <button type="submit" className="bg-slate-700 my-2 px-3 py-1 text-white rounded-md hover:bg-slate-500">Add Sale</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default SaleForm