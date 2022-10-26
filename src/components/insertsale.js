import { useState } from "react"
import "./stylef.css"



const SaleForm = () => {
    const [freight,setFreight] = useState('')
    const [entityId,setEntityId] = useState('')
    const [shipCity,setShipCity] = useState('')
    const [shipName,setShipName] = useState('')
    const [orderDate,setOrderDate] = useState('')
    const [shipperId,setShipperId] = useState('')
    const [customerId,setCustomerId] = useState('')
    const [employeeId,setEmployeeId] = useState('')
    const [shipRegion,setShipRegion] = useState('')
    const [shipAddress,setShipAddress] = useState('')
    const [shipCountry,setShipCountry] = useState('')
    const [shippedDate,setShippedDate] = useState('')
    const [requiredDate,setRequiredDate] = useState('')
    const [shipPostalCode,setShipPostalCode] = useState('')
    const [error,setError] = useState('')
    const handleSubmit = async  (e) => {
       e.preventDefault()
       const newsale = {freight,entityId,shipCity,shipName,orderDate,shipperId,customerId,employeeId,shipRegion,shipAddress,shipCountry,shippedDate,requiredDate,shipPostalCode}
       const response  = await fetch('/saleinsert',{
           method: 'POST',
           body: JSON.stringify(newsale),
           headers: {
               'Content-Type': 'application/json'
           }

       }) 
       const json = await response.json()

       if(!response.ok) {
           setError(json.error) 
       }
       if(response.ok) {
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
           console.log("New Sale added",json)
           
       }
    }
   
   return (
       <form className = "create" onSubmit={handleSubmit}>
           <h1 className="hd">Add a new Sale</h1>
           <div className="fitems">

           <label>Freight</label>
           <input 
               type = "number"
               onChange={(e) => setFreight(e.target.value)}
               value={freight}
           />
           <br/>
           <label>Entity Id</label>
           <input 
               type = "number"
               onChange={(e) => setEntityId(e.target.value)}
               value={entityId}
           />
           <br/>
           <label>Ship City</label>
           <input 
               type = "text"
               onChange={(e) => setShipCity(e.target.value)}
               value={shipCity}
           />
           <br/>
           <label>Ship Name</label>
           <input 
               type = "text"
               onChange={(e) => setShipName(e.target.value)}
               value={shipName}
           />
           <br/>
           <label>Order Date</label>
           <input 
               type = "text"
               onChange={(e) => setOrderDate(e.target.value)}
               value={orderDate}
           />
           <br/>
           <label>Shipper Id</label>
           <input 
               type = "number"
               onChange={(e) => setShipperId(e.target.value)}
               value={shipperId}
           />
           <br/>
           <label>Customer Id</label>
           <input 
               type = "number"
               onChange={(e) => setCustomerId(e.target.value)}
               value={customerId}
           />
           <br/>
           <label>Employee Id</label>
           <input 
               type = "number"
               onChange={(e) => setEmployeeId(e.target.value)}
               value={employeeId}
           />
           <br/>
           <label>Ship Region</label>
           <input 
               type = "text"
               onChange={(e) => setShipRegion(e.target.value)}
               value={shipRegion}
               
           />
           <br/>
           <label>Ship Address</label>
           <input 
               type = "text"
               onChange={(e) => setShipAddress(e.target.value)}
               value={shipAddress}
           />
           <br/>
           <label>Ship Country</label>
           <input 
               type = "text"
               onChange={(e) => setShipCountry(e.target.value)}
               value={shipCountry}
           />
           <br/>
           <label>Shipped Date</label>
           <input 
               type = "text"
               onChange={(e) => setShippedDate(e.target.value)}
               value={shippedDate}
           />
           <br/>
           <label>Required Date</label>
           <input 
               type = "text"
               onChange={(e) => setRequiredDate(e.target.value)}
               value={requiredDate}
           />
           <br/>
           <label>Ship Postal Code</label>
           <input 
               type = "text"
               onChange={(e) => setShipPostalCode(e.target.value)}
               value={shipPostalCode}
           />
           <br/>
           <button>Add Sale</button>
           {error && <div className="error">{error}</div>}
           </div>
       </form>
   )
}

export default SaleForm