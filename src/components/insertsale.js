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
        const response = await fetch('/saleinsert', {
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

        }
    }

    return (
        <div class="flex justify-center w-full">
            <div class="flex  flex-col justify-center items-center max-w-7xl w-[90%]">
                <div class="flex flex-col justify-center text-center space-y-3 my-5">
                    <h1 class="text-xl md:text-xl font-semibold">Add Sale</h1>
                </div>
                <div class=" flex flex-col justify-center lg:flex-row w-1/3 items-center lg:space-x-5 xl:space-x-24 ">
                    <div
                        class=" bg-blue-300 flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                            <h1>Freight</h1>
                            <input
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                                type="number"
                                onChange={(e) => setFreight(e.target.value)}
                                value={freight}
                            />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Entity Id</h1>
                            <input type="number"
                                onChange={(e) => setEntityId(e.target.value)}
                                value={entityId}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship City</h1>
                            <input
                                type="text"
                                onChange={(e) => setShipCity(e.target.value)}
                                value={shipCity}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Name</h1>
                            <input type="text"
                                onChange={(e) => setShipName(e.target.value)}
                                value={shipName}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Order date</h1>
                            <input type="text"
                                onChange={(e) => setOrderDate(e.target.value)}
                                value={orderDate}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Shipper id</h1>
                            <input type="number"
                                onChange={(e) => setShipperId(e.target.value)}
                                value={shipperId}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Customer Id</h1>
                            <input type="number"
                                onChange={(e) => setCustomerId(e.target.value)}
                                value={customerId}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Employee Id</h1>
                            <input type="number"
                                onChange={(e) => setEmployeeId(e.target.value)}
                                value={employeeId}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Region</h1>
                            <input type="text"
                                onChange={(e) => setShipRegion(e.target.value)}
                                value={shipRegion}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Country</h1>
                            <input type="text"
                                onChange={(e) => setShipCountry(e.target.value)}
                                value={shipCountry}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Shipped date </h1>
                            <input type="text"
                                onChange={(e) => setShippedDate(e.target.value)}
                                value={shippedDate}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Required Date</h1>
                            <input type="text"
                                onChange={(e) => setRequiredDate(e.target.value)}
                                value={requiredDate}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Postal Code</h1>
                            <input type="text"
                                onChange={(e) => setShipPostalCode(e.target.value)}
                                value={shipPostalCode}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Ship Address</h1>
                            <textarea type="text"
                                onChange={(e) => setShipAddress(e.target.value)}
                                value={shipAddress} cols="10" rows="3"
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        {/* <input type="submit" className="text center bg-blue-500 my-2 px-3 py-1 text-white rounded-md"></input> */}
                        {error && <div className="text-center text-red-600 font-semibold ">{error}</div>}
                        <div class="text-center md:text-centre lg:text-centre">
                            <button class="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>Add Sale</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SaleForm