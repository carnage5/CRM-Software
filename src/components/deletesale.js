import { useState } from "react"
import "./stylef.css"
const Deletesale = () => {
    const [saleid,setSaleid] = useState('')
    const [error,setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const sale = {saleid}
        const response = await fetch('/saledelete/'+saleid,{
            method: 'DELETE',
            body: JSON.stringify(sale),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.error) 
        }
        if(response.ok) {
            setSaleid('')
            setError(null)
            console.log("Sale Order deleted",json)
        }
        
    }
    return (
            <form className="delete" onSubmit={handleSubmit}>
                <div className="fitems">
                <h3 className="hd">Type the Sale_Id</h3>
                <label>Sale_Id</label>
                <input 
                    type = "text"
                    onChange={(e) => setSaleid(e.target.value)}
                    value={saleid}
                />
                <br/>
                <button>Delete Sale Order</button>
                {error && <div className="error">{error}</div>}
                </div>
            </form>
    )

}

export default Deletesale