import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart, Pie, Tooltip } from 'recharts';
import Navbar from './navbar';
import Menu from './menu';
class Datavisual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataChoice: 'category', // this is for the user to choose which table to view
            data: {}, // this the data in that table
            dataAvailable: false, // this is a flag to check whether we have to display the data or the circular progress bar
            visualizationAvailable: false, // this is a flag to check whether we can display the circular progress bar
            dataViewChoice: 'none', // this is about which progress bar the user wants to view (pofo is percentage of fullfilled orders)
            value_to_be_displayed: 0, // this is the value for the progress bar
            pieChart: 'emp', // this is changed based on which pie chart the user wants to see
            pieChartData: [], // this holds the data that will be visualized as pie chart later
            filter: false // to check if a filter needs to be appiled
        };
    }

    handleChangeData = (event) => { // function that updates dataChoice
        if (event.target.value === 'salesOrder' || event.target.value === 'orderDetail') {
            this.setState({
                dataChoice: event.target.value,
                filter: true
            })
        }
        else {
            this.setState({
                filter: false,
                dataChoice: event.target.value
            })
        }
    }

    handleSubmitDataView = (event) => { // function that makes a request to the backend to get the required table
        event.preventDefault();
        fetch('http://localhost:4000/getData', {
            method: "POST",
            body: JSON.stringify({
                dataChoice: this.state.dataChoice
            }),
            headers: { 'Content-Type': 'Application/json' }
        }).then(resp => resp.json()).then(resp => {
            console.log(resp.data) // data is the required table which is a list of objects for now
            this.setState({
                data: resp.data,
                dataAvailable: true,
                visualizationAvailable: false
            })
        })
    }

    handleChangeView = (event) => { // function that updated dataViewChoice
        this.setState({
            dataViewChoice: event.target.value
        });
    }

    handleSubmitDataVis = (event) => { // function that makes a request to the backend 
        event.preventDefault();
        if (this.state.dataViewChoice === 'none') {
            alert("Please select an option")
        }
        else {
            console.log(this.state.dataViewChoice)
            fetch('http://localhost:4000/dataVisReq', {
                method: 'POST',
                body: JSON.stringify({
                    'dataVisCategory': this.state.dataViewChoice
                }),
                headers: { 'Content-Type': 'Application/json' }
            }).then(resp => resp.json()).then(resp => {
                console.log("From handleSubmitDataVis")
                console.log(resp.val)
                this.setState({
                    value_to_be_displayed: resp.val // this represents the percentage of the progress bar to be filled
                })
            })
        }
    }

    getPieChart = (event) => { // function to retieve the pie chart data from the backend
        fetch('http://localhost:4000/getPieChart', {
            method: 'POST',
            body: JSON.stringify({
                'pieChart': event.target.value
            }),
            headers: { 'Content-Type': 'Application/json' }
        }).then(resp => resp.json()).then(resp => {
            console.log('From getPieChart frontend')
            console.log(resp.groupedData)
            this.setState({
                pieChart: event.target.value,
                dataAvailable: false,
                visualizationAvailable: true,
                pieChartData: resp.groupedData.slice(0, 10) // we need only the top 10 customers
            })
        })
    }

    filterOrderDetails = (event) => {
        event.preventDefault();
        console.log(this.CustIdRef.value)
        fetch('http://localhost:4000/filterOrderDetails', {
            method: "POST",
            body: JSON.stringify({
                custId: this.CustIdRef.value
            }),
            headers: { 'Content-Type': 'Application/json' }
        }).then(resp => resp.json()).then(resp => {
            console.log(resp.data) // data is the required table which is a list of objects for now
            this.setState({
                data: resp.data,
                dataAvailable: true,
                visualizationAvailable: false
            })
        })
    }

    filterOrderId = (e) => {
        e.preventDefault()
        console.log(this.OrderIdRef.value)
        fetch('http://localhost:4000/filterOrderId', {
            method: "POST",
            body: JSON.stringify({
                orderId: this.OrderIdRef.value
            }),
            headers: { 'Content-Type': 'Application/json' }
        }).then(resp => resp.json()).then(resp => {
            console.log(resp.data) // data is the required table which is a list of objects for now
            this.setState({
                data: resp.data,
                dataAvailable: true,
                visualizationAvailable: false
            })
        })
    }

    render() {
        let filter_comp;
        if (this.state.filter === true) {
            console.log("Filter is set to true")
            if (this.state.dataChoice === 'salesOrder') {
                filter_comp = (
                    <div>
                        <br />
                        <form onSubmit={this.filterOrderDetails}>
                            Customer ID:&nbsp;<input type="text" defaultValue="all" ref={(e) => this.CustIdRef = e} className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%]  border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"
                            ></input>
                            <br /><button type="submit" className='mt-2 inline-flex justify-center py-2 px-1 w-20 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500'>Filter</button>
                        </form>
                    </div>
                );
            }
            else {
                filter_comp = (
                    <div>
                        <br />
                        <form onSubmit={this.filterOrderId}>
                            Order ID:&nbsp;<input type="text" defaultValue="all" ref={(e) => this.OrderIdRef = e} className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%]  border border-slate-400 focus:border  focus:outline-none focus:border-slate-700"
                            ></input>
                            <br /><button type="submit" className='mt-2 inline-flex justify-center py-2 px-1 w-20 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500'>Filter</button>
                        </form>
                    </div>
                );
            }
        }
        else {
            filter_comp = <div></div>
            console.log("Filter is set to false")
        }
        let comp;
        if (this.state.dataAvailable === true && this.state.visualizationAvailable === false) {
            if (this.state.data.length === 0) {
                if (this.state.dataChoice === 'salesOrder') {
                    console.log("Empty data")
                    comp = (
                        <div>
                            <h1>Invalid Customer ID</h1>
                        </div>
                    );
                }
                else {
                    console.log("Empty data")
                    comp = (
                        <div>
                            <h1>Invalid Order ID</h1>
                        </div>
                    );
                }
            }
            else {
                comp = ( // this is to create any table from any json data
                    <table className='border-2 border-white border-solid rounded-xl text-slate-700'>
                        <tr key={"header"}>
                            {Object.keys(this.state.data[0]).map((key) => (
                                <th className='border-2 border-black border-solid'>{key}</th>
                            ))}
                        </tr>
                        {this.state.data.map((item) => (
                            <tr key={item._id}>
                                {Object.values(item).map((val) => (
                                    <td className='border-2 border-black border-solid'>{val}</td>
                                ))}
                            </tr>
                        ))}
                    </table>
                )
            }
        }
        else if (this.state.dataAvailable === false && this.state.visualizationAvailable === true) {
            console.log(this.state.pieChartData)
            comp = ( // pie chart
                <div className='bg-slate-200 flex rounded-xl justify-center overflow-hidden'>
                    <PieChart width={800} height={600} className="overflow-hidden flex justify-center">
                        <Pie
                            dataKey="count"
                            nameKey="name"
                            isAnimationActive={true}
                            data={this.state.pieChartData}
                            outerRadius={225}
                            fill="#334155"
                            label={(entry) => entry.name}

                        />
                        <Tooltip separator=' count ' />
                    </PieChart>
                </div>
            )
        }
        else { // empty component, seen when the user first visits the page
            comp = <table />
        }
        return (
            <div>
                <Navbar loggedin="true" />
                <Menu dashboard="true" />
                <br />
                <aside className='mx-3 justify-center'>
                    <div className=' bg-slate-300 float-left w-[24%] rounded-xl'>
                        <br />
                        {/* drop down menu for the user to choose which table they want to see */}
                        <aside className='mx-3 justify-center'>
                            <form onSubmit={this.handleSubmitDataView}>
                                <select value={this.state.dataChoice} onChange={this.handleChangeData} className="bg-slate-100 rounded-lg px-2 py-1 w-[80%] lg:w-[60%] placeholder:text-gray-300 focus:border focus:outline-none focus:border-slate-700">
                                    <option value="category">Category</option>
                                    <option value="customer">Customer</option>
                                    <option value="employee">Employee</option>
                                    {/* <option value="employeeTerritory">Employee Territory</option> */}
                                    <option value="orderDetail">Order Detail</option>
                                    <option value="product">Product</option>
                                    <option value="region">Region</option>
                                    <option value="salesOrder">Sales Order</option>
                                    <option value="shipper">Shipper</option>
                                    <option value="supplier">Supplier</option>
                                    <option value="territory">Territory</option>
                                    <option value="unfulfilled">Unfulfilled Orders</option>
                                </select><br />
                                <button className='mt-2 inline-flex items-center py-2 px-1 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500' type="submit">&nbsp;Submit Data Request&nbsp;</button>
                            </form>
                            <div>
                                {filter_comp}
                            </div>
                            <br />
                            {/* This is for the user to choose a pie chart */}
                            <div onChange={this.getPieChart}>
                                <input type="radio" value="emp" name="selectPie" /> View Top Employees<br />
                                <input type="radio" value="cust" name="selectPie" /> View Top Customers
                            </div>
                            <br />
                            {/* This is for the user to choose a percentage to view as a circular progress bar */}
                            <form onSubmit={this.handleSubmitDataVis}>
                                <select value={this.state.dataViewChoice} onChange={this.handleChangeView} className="bg-slate-100 rounded-lg px-2 py-1 w-[80%] lg:w-[60%] placeholder:text-gray-300 focus:border focus:outline-none focus:border-slate-500">
                                    <option value="none">Choose an option</option>
                                    <option value="pofo">Percentage of fullfilled orders</option>
                                    <option value="discount">Percentage of products sold at MRP</option>
                                </select><br />
                                <button className='mt-2 inline-flex items-center py-2 px-1 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500' type="submit">&nbsp;Submit Data Visual Request&nbsp;</button>
                            </form>
                            <br />
                        </aside>
                    </div>
                    {/* This is where the progress bar gets placed on the page */}
                    <div className='ml-[5%] mt-5 p-5 rounded-full float-left clear-left bg-slate-300' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={this.state.value_to_be_displayed} text={this.state.value_to_be_displayed.toFixed(2)}
                            styles={
                                buildStyles({
                                    textColor: "black",
                                    pathColor: "rgb(51 65 85)",
                                    trailColor: "white"
                                })
                            } />
                    </div>
                    {console.log(comp)}
                    <div className=' h-[600px] relative ml-[370px] p-5 overflow-auto  bg-slate-200 rounded-lg'>
                        {comp}
                    </div>
                </aside>
            </div>
        );
    }
}

export default Datavisual;