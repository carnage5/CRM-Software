import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
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
            pieChartData: [] // this holds the data that will be visualized as pie chart later
        };
    }

    handleChangeData = (event) => { // function that updates dataChoice
        this.setState({
            dataChoice: event.target.value
        });
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
        })
    }

    handleSubmitDataVis = (event) => { // function that makes a request to the backend 
        event.preventDefault();
        if (this.state.dataViewChoice == 'none') {
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

    render() {
        let comp;
        if (this.state.dataAvailable == true && this.state.visualizationAvailable == false) {
            comp = ( // this is to create any table from any json data
                <table className='border-2 border-black border-solid'>
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
        else if (this.state.dataAvailable == false && this.state.visualizationAvailable == true) {
            comp = ( // pie chart
                <div>
                    <PieChart width={800} height={800}>
                        <Pie
                            dataKey="count"
                            isAnimationActive={false}
                            data={this.state.pieChartData}
                            cx={400}
                            cy={300}
                            outerRadius={250}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            )
        }
        else { // empty component, seen when the user first visits the page
            comp = <table />
        }
        return (
            <div>
                <Navbar loggedin="true"/>
                <Menu/>
                <div className=' bg-slate-300 float-left w-1/3'>
                    {/* drop down menu for the user to choose which table they want to see */}
                    <form onSubmit={this.handleSubmitDataView}>
                        <select value={this.state.dataChoice} onChange={this.handleChangeData}>
                            <option value="category">Category</option>
                            <option value="customer">Customer</option>
                            <option value="employee">Employee</option>
                            <option value="employeeTerritory">Employee Territory</option>
                            <option value="orderDetail">Order Detail</option>
                            <option value="product">Product</option>
                            <option value="region">Region</option>
                            <option value="salesOrder">Sales Order</option>
                            <option value="shipper">Shipper</option>
                            <option value="supplier">Supplier</option>
                            <option value="territory">Territory</option>
                        </select><br />
                        <button className='bg-sky-300' type="submit">Submit Data Request&nbsp;</button>
                    </form>
                    <br /><br /><br /><br /><br />
                    {/* This is for the user to choose a pie chart */}
                    <div onChange={this.getPieChart}>
                        <input type="radio" value="emp" name="selectPie" /> Group by Employee ID<br />
                        <input type="radio" value="cust" name="selectPie" /> Group by Customer ID
                    </div>
                    <br /><br /><br /><br /><br />
                    {/* This is for the user to choose a percentage to view as a circular progress bar */}
                    <form onSubmit={this.handleSubmitDataVis}>
                        <select value={this.state.dataViewChoice} onChange={this.handleChangeView}>
                            <option value="none">Choose an option</option>
                            <option value="pofo">Percentage of fullfilled orders</option>
                            <option value="discount">Percentage of products sold at MRP</option>
                        </select><br />
                        <button className='bg-sky-300' type="submit">Submit Data Visual Request&nbsp;</button>
                    </form>
                </div>
                {/* This is where the progress bar gets placed on the page */}
                <div className=' float-left clear-left' style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={this.state.value_to_be_displayed} text={this.state.value_to_be_displayed.toFixed(2)} />
                </div>
                <div className='h-[400px] overflow-scroll pr-10 px-10 rounded-md '>
                    {comp}
                </div>
            </div>
        );
    }
}

export default Datavisual;