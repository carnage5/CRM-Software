import { useState } from "react"
const Deletesale = () => {
    const [saleid, setSaleid] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const sale = { saleid }
        const response = await fetch('/saledelete/' + saleid, {
            method: 'DELETE',
            body: JSON.stringify(sale),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setSaleid('')
            setError(null)
            console.log("Sale Order deleted", json)
        }

    }
    return (
        <div class="flex justify-center w-full">
            <div class="flex  flex-col justify-center items-center max-w-7xl w-[90%]">
                <div class="flex flex-col justify-center text-center space-y-3 my-5">
                    <h1 class="text-xl md:text-xl font-semibold">Delete Sale</h1>
                </div>
                <div class=" flex flex-col justify-center lg:flex-row w-1/3 items-center lg:space-x-5 xl:space-x-24 ">
                    <div
                        class=" bg-blue-300 flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
                        <div class="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                            <h1>Sale Id</h1>
                            <input
                                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                                type="text"
                                onChange={(e) => setSaleid(e.target.value)}
                                value={saleid}
                            />
                        </div>
                        {/* <input type="submit" className="text center bg-blue-500 my-2 px-3 py-1 text-white rounded-md"></input> */}
                        {error && <div className="text-center text-red-600 font-semibold ">{error}</div>}
                        <div class="text-center md:text-centre lg:text-centre">
                            <button class="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>Delete sale</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Deletesale