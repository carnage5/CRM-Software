import { useState } from "react"

const CustForm = () => {
    const [fax, setFax] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [mobile, setMobile] = useState('')
    const [region, setRegion] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [entityId, setEntityId] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [contactName, setContactName] = useState('')
    const [contactTitle, setContactTitle] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newcust = { fax, city, email, phone, mobile, region, address, country, entityId, postalCode, companyName, contactName, contactTitle }
        const response = await fetch('http://localhost:4000/custinsert', {
            method: 'POST',
            body: JSON.stringify(newcust),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setFax('')
            setCity('')
            setEmail('')
            setPhone('')
            setMobile('')
            setRegion('')
            setAddress('')
            setCountry('')
            setEntityId('')
            setPostalCode('')
            setCompanyName('')
            setContactName('')
            setContactTitle('')
            setError(null)
            console.log("NEW Customer added", json)
            alert("Customer Succesfully added")


        }
    }

    return (
        <div className="flex justify-center w-full bg-slate-300 rounded-xl ">
            <div className="flex  flex-col justify-center items-center max-w-7xl w-[90%]">
                <div className="flex flex-col justify-center text-center space-y-3 my-5">
                    <h1 className="text-xl md:text-xl font-semibold tracking-widest">Add Customer</h1>
                </div>
                <div className=" flex flex-col justify-center lg:flex-row w-1/3 items-center lg:space-x-5 xl:space-x-24 ">
                    <form onSubmit={handleSubmit}
                        className=" bg-slate-200 flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4 rounded-md">
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                            <h1>Company name</h1>
                            <input
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%]  border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"
                                type="text"
                                required
                                onChange={(e) => setCompanyName(e.target.value)}
                                value={companyName}
                            />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Contact name</h1>
                            <input 
                                type="text"
                                required
                                onChange={(e) => setContactName(e.target.value)}
                                value={contactName}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Contact Title</h1>
                            <input
                                type="text"
                                required
                                onChange={(e) => setContactTitle(e.target.value)}
                                value={contactTitle}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Email</h1>
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Phone</h1>
                            <input 
                                type="tel"
                                required
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Mobile</h1>
                            <input type="tel"
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Fax</h1>
                            <input 
                                type="tel"
                                required
                                onChange={(e) => setFax(e.target.value)}
                                value={fax}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>City</h1>
                            <input 
                                type="text"
                                required
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Region</h1>
                            <input type="text"
                                onChange={(e) => setRegion(e.target.value)}
                                value={region}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Country</h1>
                            <input 
                                type="text"
                                required
                                onChange={(e) => setCountry(e.target.value)}
                                value={country}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Entity ID</h1>
                            <input 
                                type="number"
                                required
                                onChange={(e) => setEntityId(e.target.value)}
                                value={entityId}
                                min="0"
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Postal Code</h1>
                            <input type="number"
                                required
                                min="0"
                                onChange={(e) => setPostalCode(e.target.value)}
                                value={postalCode}
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700" />
                        </div>
                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Address</h1>
                            <textarea 
                                type="text"
                                required
                                onChange={(e) => setAddress(e.target.value)}
                                value={address} cols="10" rows="3"
                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"></textarea>
                        </div>
                        {/* <input type="submit" className="text center bg-blue-500 my-2 px-3 py-1 text-white rounded-md"></input> */}
                        {error && <div className="text-center text-red-600 font-semibold ">{error}</div>}
                        <div className="text-center md:text-centre lg:text-centre">
                            <button type="submit" className="bg-slate-700 my-2 px-3 py-1 text-white rounded-md hover:bg-slate-500" >Add customer</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default CustForm

/*
<div className="flex justify-center w-full">
                                            <div className="flex flex-col justify-center items-center max-w-7xl w-[90%]">
                                                <div className="flex flex-col justify-center text-center space-y-3 my-9">
                                                    <h1 className="text-xl md:text-2xl font-semibold">Contact our sales team</h1>
                                                    <p className="text-gray-600">Our team is happy to answer your sales questions. Fill out the form and
                                                        we will be in touch as soon as
                                                        possible.</p>
                                                </div>
                                                <div className="flex flex-col justify-center lg:flex-row  items-center lg:space-x-10 xl:space-x-24 ">
                                                    <div
                                                        className=" shadow-lg  flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
                                                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                                                            <h1>First name</h1>
                                                            <input type="text" name="" id=""
                                                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700">
                                                        </div>
                                                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Last name</h1>
                                                            <input type="text" name="" id=""
                                                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700">
                                                        </div>
                                                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Work email</h1>
                                                            <input type="email" name="" id=""
                                                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700">
                                                        </div>
                                                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Work phone</h1>
                                                            <input type="tel" name="" id=""
                                                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700">
                                                        </div>
                                                        <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Company Website</h1>
                                                            <input type="text" name="" id=""
                                                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700">
                                                        </div>
                                                            <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Anything else?</h1>
                                                            <textarea name="" id="" cols="10" rows="3"
                                                                className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"></textarea>
                                                        </div>
                                                        <div className="text-center md:text-left lg:text-right">
                                                            <button className="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600">Contact
                                                                Sales</button>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div> */