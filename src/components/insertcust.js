import { useState } from "react"

// const TestForm = () => {
//      const [name,setName] = useState('')
//      const [age,setAge] = useState('')
//      const [error,setError] = useState('')
//      const handleSubmit = async  (e) => {
//         e.preventDefault()
//         const testu = {name,age}
//         const response  = await fetch('/testinsert',{
//             method: 'POST',
//             body: JSON.stringify(testu),
//             headers: {
//                 'Content-Type': 'application/json'
//             }

//         }) 
//         const json = await response.json()

//         if(!response.ok) {
//             setError(json.error) 
//         }
//         if(response.ok) {
//             setName('')
//             setAge('')
//             setError(null)
//             console.log("NEW test user adede",json)

//         }
//      }

//     return (
//         <form className = "create" onSubmit={handleSubmit}>
//             <h3>Add a new testuser</h3>
//             <label>Name</label>
//             <input 
//                 type = "text"
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//             />
//             <label>Age</label>
//             <input 
//                 type = "age"
//                 onChange={(e) => setAge(e.target.value)}
//                 value={age}
//             />
//             <button>Add testuser</button>
//             {error && <div className="error">{error}</div>}
//         </form>
//     )
// }

// export default TestForm

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
        const response = await fetch('/custinsert', {
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

        }
    }

    return (
        <div class="flex justify-center w-full bg-slate-300 rounded-xl ">
            <div class="flex  flex-col justify-center items-center max-w-7xl w-[90%]">
                <div class="flex flex-col justify-center text-center space-y-3 my-5">
                    <h1 class="text-xl md:text-xl font-semibold">Add Customer</h1>
                </div>
                <div class=" flex flex-col justify-center lg:flex-row w-1/3 items-center lg:space-x-5 xl:space-x-24 ">
                    <div
                        class=" bg-slate-200 flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4 rounded-md">
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                            <h1>Company name</h1>
                            <input
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                                type="text"
                                onChange={(e) => setCompanyName(e.target.value)}
                                value={companyName}
                            />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Contact name</h1>
                            <input type="text"
                                onChange={(e) => setContactName(e.target.value)}
                                value={contactName}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Contact Title</h1>
                            <input
                                type="text"
                                onChange={(e) => setContactTitle(e.target.value)}
                                value={contactTitle}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Email</h1>
                            <input type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Phone</h1>
                            <input type="tel"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Mobile</h1>
                            <input type="tel"
                                onChange={(e) => setMobile(e.target.value)}
                                value={mobile}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Fax</h1>
                            <input type="text"
                                onChange={(e) => setFax(e.target.value)}
                                value={fax}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>City</h1>
                            <input type="text"
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Region</h1>
                            <input type="text"
                                onChange={(e) => setRegion(e.target.value)}
                                value={region}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Country</h1>
                            <input type="text"
                                onChange={(e) => setCountry(e.target.value)}
                                value={country}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Entity ID</h1>
                            <input type="number"
                                onChange={(e) => setEntityId(e.target.value)}
                                value={entityId}
                                min="0"
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Postal Code</h1>
                            <input type="text"
                                onChange={(e) => setPostalCode(e.target.value)}
                                value={postalCode}
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500" />
                        </div>
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                            <h1>Address</h1>
                            <textarea type="text"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address} cols="10" rows="3"
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        {/* <input type="submit" className="text center bg-blue-500 my-2 px-3 py-1 text-white rounded-md"></input> */}
                        {error && <div className="text-center text-red-600 font-semibold ">{error}</div>}
                        <div class="text-center md:text-centre lg:text-centre">
                            <button class="bg-slate-700 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>Add customer</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CustForm

/*
<div class="flex justify-center w-full">
                                            <div class="flex flex-col justify-center items-center max-w-7xl w-[90%]">
                                                <div class="flex flex-col justify-center text-center space-y-3 my-9">
                                                    <h1 class="text-xl md:text-2xl font-semibold">Contact our sales team</h1>
                                                    <p class="text-gray-600">Our team is happy to answer your sales questions. Fill out the form and
                                                        we will be in touch as soon as
                                                        possible.</p>
                                                </div>
                                                <div class="flex flex-col justify-center lg:flex-row  items-center lg:space-x-10 xl:space-x-24 ">
                                                    <div
                                                        class=" shadow-lg  flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
                                                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                                                            <h1>First name</h1>
                                                            <input type="text" name="" id=""
                                                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500">
                                                        </div>
                                                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Last name</h1>
                                                            <input type="text" name="" id=""
                                                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500">
                                                        </div>
                                                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Work email</h1>
                                                            <input type="email" name="" id=""
                                                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500">
                                                        </div>
                                                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Work phone</h1>
                                                            <input type="tel" name="" id=""
                                                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500">
                                                        </div>
                                                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Company Website</h1>
                                                            <input type="text" name="" id=""
                                                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500">
                                                        </div>
                                                            <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                                                            <h1>Anything else?</h1>
                                                            <textarea name="" id="" cols="10" rows="3"
                                                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"></textarea>
                                                        </div>
                                                        <div class="text-center md:text-left lg:text-right">
                                                            <button class="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600">Contact
                                                                Sales</button>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div> */