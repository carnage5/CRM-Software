import { useState } from "react"
import "./stylef.css"

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
    const [fax,setFax] = useState('')
    const [city,setCity] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [mobile,setMobile] = useState('')
    const [region,setRegion] = useState('')
    const [address,setAddress] = useState('')
    const [country,setCountry] = useState('')
    const [entityId,setEntityId] = useState('')
    const [postalCode,setPostalCode] = useState('')
    const [companyName,setCompanyName] = useState('')
    const [contactName,setContactName] = useState('')
    const [contactTitle,setContactTitle] = useState('')
    const [error,setError] = useState('')
    const handleSubmit = async  (e) => {
       e.preventDefault()
       const newcust = {fax,city,email,phone,mobile,region,address,country,entityId,postalCode,companyName,contactName,contactTitle}
       const response  = await fetch('/custinsert',{
           method: 'POST',
           body: JSON.stringify(newcust),
           headers: {
               'Content-Type': 'application/json'
           }

       }) 
       const json = await response.json()

       if(!response.ok) {
           setError(json.error) 
       }
       if(response.ok) {
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
           console.log("NEW Customer added",json)
           
       }
    }
   
   return (
       <form className = "create" onSubmit={handleSubmit}>
           <h1 className="hd">Add a new Customer</h1>
           <div className="fitems">

           <label>fax</label>
           <input 
               type = "text"
               onChange={(e) => setFax(e.target.value)}
               value={fax}
           />
           <br/>
           <label>City</label>
           <input 
               type = "text"
               onChange={(e) => setCity(e.target.value)}
               value={city}
           />
           <br/>
           <label>Email</label>
           <input 
               type = "text"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
           />
           <br/>
           <label>Phone</label>
           <input 
               type = "text"
               onChange={(e) => setPhone(e.target.value)}
               value={phone}
           />
           <br/>
           <label>mobile</label>
           <input 
               type = "text"
               onChange={(e) => setMobile(e.target.value)}
               value={mobile}
           />
           <br/>
           <label>Region</label>
           <input 
               type = "text"
               onChange={(e) => setRegion(e.target.value)}
               value={region}
           />
           <br/>
           <label>Address</label>
           <input 
               type = "text"
               onChange={(e) => setAddress(e.target.value)}
               value={address}
           />
           <br/>
           <label>Country</label>
           <input 
               type = "text"
               onChange={(e) => setCountry(e.target.value)}
               value={country}
           />
           <br/>
           <label>EntityId</label>
           <input 
               type = "number"
               onChange={(e) => setEntityId(e.target.value)}
               value={entityId}
               min = "0"
           />
           <br/>
           <label>PostalCode</label>
           <input 
               type = "text"
               onChange={(e) => setPostalCode(e.target.value)}
               value={postalCode}
           />
           <br/>
           <label>Company Name</label>
           <input 
               type = "text"
               onChange={(e) => setCompanyName(e.target.value)}
               value={companyName}
           />
           <br/>
           <label>Contact Name</label>
           <input 
               type = "text"
               onChange={(e) => setContactName(e.target.value)}
               value={contactName}
           />
           <br/>
           <label>Contact Title </label>
           <input 
               type = "text"
               onChange={(e) => setContactTitle(e.target.value)}
               value={contactTitle}
           />
           <br/>
           <button>Add Customer</button>
           {error && <div className="error">{error}</div>}
           </div>
       </form>
   )
}

export default CustForm