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
            dataReady: false, // we can use this later if we want to display the top 3 or the top 5
            floatingDiv: false,
            customerData: [],
            seen:false
        }
    }

    togglepop=()=>{
        this.setState({
            seen: !this.state.seen
        })
        console.log("works")
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

    getMvcData = () => {
        this.togglepop();
        fetch('http://localhost:4000/getMvcData', {
            method: "POST",
            body: JSON.stringify({
                custId: this.state.mvc[0]._id
            }),
            headers: { 'Content-Type': 'Application/json' }
        }).then(resp => resp.json()).then(resp => {
            console.log(resp.data)
            this.setState({
                floatingDiv: true,
                customerData: resp.data
            })
        })
    }


    render() {
        let comp;
        if (this.state.floatingDiv == true) {
            comp = (
                <div>
                    <table className='border-2 border-white border-solid'>
                        <tr key={"header"}>
                            {Object.keys(this.state.customerData[0]).map((key) => (
                                <th className='border-2 border-black border-solid'>{key}</th>
                            ))}
                        </tr>
                        {this.state.customerData.map((item) => (
                            <tr key={item._id}>
                                {Object.values(item).map((val) => (
                                    <td className='border-2 border-black border-solid'>{val}</td>
                                ))}
                            </tr>
                        ))}
                    </table>
                </div>
            )
        }
        else {
            comp = (
                <div></div>
            )
        }
        return (
            <div className='relative'>
                 <Navbar loggedin="true"/>
                 <Menu reports="true"/>
                 {this.state.seen ?  <div className='w-[70%] h-[70%] absolute m-auto left-0 right-0 ml-auto mr-auto z-10 p-2 mx-3 rounded-lg max-h-80 overflow-y-auto border border-grey-200 shadow-md  shadow-slate-300 bg-slate-300 my-3 '>
                <button className="text-white float-right bg-slate-700 w-7 rounded-full hover:scale-[1.2] pb-1 cursor-pointer" onClick={this.togglepop}>&times;</button>
                    <br/><br/>
                    {comp}
                </div> :null}
                {/* button that sends request to the backend */}
                <div className='flex justify-center mt-5'>
                <button onClick={this.get_report_data} className=' inline-flex items-center py-2 px-1 text-sm font-medium text-center text-white bg-slate-700 rounded-lg  hover:bg-slate-300  '>&nbsp;Click Here To View Report&nbsp;</button>
                </div>
                {/* the className widgets represents a whole row of widgets */}
                <div className={"relative container px-5 py-5 mx-auto  " + (this.state.seen? 'mix-blend-normal':'')}>
                    {/* <div className='flex items-center'> */}     
                {/* </div> */}
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
                        <p className='font-semibold' onClick={this.getMvcData}>Most Valuable Customer:</p><br/>
                        <p>ID:&nbsp;{this.state.mvc[0]._id}, {this.state.mvc[0].count} Orders</p>

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