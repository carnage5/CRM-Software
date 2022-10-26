import { useState } from "react"
import "./stylef.css"
const Deletecust = () => {
    const [custid,setCustid] = useState('')
    const [error,setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const cust = {custid}
        const response = await fetch('/custdelete/'+custid,{
            method: 'DELETE',
            body: JSON.stringify(cust),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.error) 
        }
        if(response.ok) {
            setCustid('')
            setError(null)
            console.log("Customer deleted",json)
        }
        
    }
    return (

            <form className="delete" onSubmit={handleSubmit}>
                <div className="fitems">
                <h3 className="hd">Type the Customer_Id</h3>
                <label>Customer_Id</label>
                <input 
                    type = "text"
                    onChange={(e) => setCustid(e.target.value)}
                    value={custid}
                />
                <br/>
                <button>Delete Customer</button>
                {error && <div className="error">{error}</div>}
                </div>
            </form>
    )

}

export default Deletecust