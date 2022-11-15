import React from 'react';
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
                 <Menu reports="true"/>
                {/* button that sends request to the backend */}
                <div className='flex justify-center mt-5'>
                <button onClick={this.get_report_data} className=' inline-flex items-center py-2 px-1 text-sm font-medium text-center text-white bg-slate-700 rounded-lg  hover:bg-slate-300  '>&nbsp;Click Here To View Report&nbsp;</button>
                </div>
                {/* the className widgets represents a whole row of widgets */}
                <div className="container px-5 py-5 mx-auto ">
                <div className='flex flex-wrap justify-center'>
                    <div className=' xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Most Sold Product:</p><br/><p>
                            ID:&nbsp;{this.state.msp[0]._id}, {this.state.msp[0].count} Times</p></div>
                    </div>
                    <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Total Revenue:</p><br/><p>
                            ${this.state.totalRevenue.toFixed(2)}</p></div>
                    </div>
                    <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Average Product Unit Price:</p><br/><p>
                            ${this.state.avgUP.toFixed(2)}</p></div>
                    </div>
                
                <br></br>
                {/* next row of widgets */}
                    <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Most Valuable Customer:</p><br/><p>
                            ID:&nbsp;{this.state.mvc[0]._id}, {this.state.mvc[0].count} Orders</p></div>
                    </div>
                    <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Most Valuable Employee:</p><br/><p>
                            ID:&nbsp;{this.state.mve[0]._id}, {this.state.mve[0].count} Sales</p></div>
                    </div>
                <br></br>
                {/* next row of widgets */}
                    <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Most Frequently Shipped Country:</p><br/><p>
                            {this.state.mfsc[0]._id}, {this.state.mfsc[0].count} Times</p></div>
                    </div>
                    <div className='xl:w-[30%] md:w-1/2 p-4 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-50 my-3 hover:scale-[1.05] transition duration-700'>
                        <div className='h-[100px]'><p className='font-semibold'>Country With Most Number of Suppliers:</p><br/><p>
                            {this.state.cwms[0]._id}, {this.state.cwms[0].count} Suppliers</p></div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Report;