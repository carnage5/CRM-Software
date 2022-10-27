import React from 'react';
import "./report.css";
import Navbar from './navbar';
import Menu from './menu';
class Report extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mfsc: [{ _id: 'NA', count: '0' }], // most frequently shipped country
            totalRevenue: 0,
            avgUP: 0, // average unit price
            mvc: [{ _id: 'NA', count: '0' }], // most valuable customers
            mve: [{ _id: 'NA', count: '0' }], // most valuable employees
            cwms: [{ _id: 'NA', count: '0' }], // country with most number of suppliers
            msp: [{ _id: 'NA', count: '0' }], // most sold products
            dataReady: false // we can use this later if we want to display the top 3 or the top 5
        }
    }

    get_report_data = () => { // sends a request to the backend for the report data
        fetch('http://localhost:4000/reportData', {
            method: "GET"
        }).then(resp => resp.json()).then(resp => {
            console.log("Received data at frontend")
            console.log(resp)
            this.setState({
                mfsc: resp.mfsc,
                totalRevenue: resp.totalRevenue,
                avgUP: resp.avgUP,
                mvc: resp.mvc,
                mve: resp.mve,
                cwms: resp.cwms,
                msp: resp.msp,
                dataReady: true
            })
        })
    }

    render() {
        return (
            <div>
                 <Navbar loggedin="true"/>
                 <Menu/>
                {/* button that sends request to the backend */}
                <button onClick={this.get_report_data} style = {{"color" : "red"}}>Click Here To View Report</button>
                {/* the className widgets represents a whole row of widgets */}
                <div className='flex p-[20px] gap-[20px] '>
                    <div className='widget'>
                        <div className='innerDiv'><b>Most Sold Product:&nbsp;</b>
                            ID:&nbsp;{this.state.msp[0]._id}, {this.state.msp[0].count} Times</div>
                    </div>
                    <div className='widget'>
                        <div className='innerDiv'><b>Total Revenue:&nbsp;</b>
                            ${this.state.totalRevenue}</div>
                    </div>
                    <div className='widget'>
                        <div className='innerDiv'><b>Average Product Unit Price:&nbsp;</b>
                            ${this.state.avgUP.toFixed(2)}</div>
                    </div>
                </div>
                <br></br>
                {/* next row of widgets */}
                <div className='flex p-[20px] gap-[20px]'>
                    <div className='widget'>
                        <div className='innerDiv'><b>Most Valuable Customer:&nbsp;</b>
                            ID:&nbsp;{this.state.mvc[0]._id}, {this.state.mvc[0].count} Orders</div>
                    </div>
                    <div className='widget'>
                        <div className='innerDiv'><b>Most Valuable Employee:&nbsp;</b>
                            ID:&nbsp;{this.state.mve[0]._id}, {this.state.mve[0].count} Sales</div>
                    </div>
                </div>
                <br></br>
                {/* next row of widgets */}
                <div className='flex p-[20px] gap-[20px]'>
                    <div className='widget'>
                        <div className='innerDiv'><b>Most Frequently Shipped Country:&nbsp;</b>
                            {this.state.mfsc[0]._id}, {this.state.mfsc[0].count} Times</div>
                    </div>
                    <div className='widget'>
                        <div className='innerDiv'><b>Country With Most Number of Suppliers:&nbsp;</b>
                            {this.state.cwms[0]._id}, {this.state.cwms[0].count} Suppliers</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;