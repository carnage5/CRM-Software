import React from 'react';
import Deletecust from './deletecust';
import Deletesale from './deletesale';
import CustForm from './insertcust';
import SaleForm from './insertsale';
import Menu from './menu';
import Navbar from './navbar';
class Customer_Data extends React.Component {
    state = {
        seen1: true,
        seen2: false,
        seen3: false,
        seen4: false
    }

    togglepop1 = () => {
        this.setState({
            seen1: true,
            seen2: false,
            seen3: false,
            seen4: false
        })
        console.log("works 1")
    }
    togglepop2 = () => {
        this.setState({
            seen1: false,
            seen2: true,
            seen3: false,
            seen4: false
        })
        console.log("works 2")
    }
    togglepop3 = () => {
        this.setState({
            seen1: false,
            seen2: false,
            seen3: true,
            seen4: false
        })
        console.log("works 3")
    }
    togglepop4 = () => {
        this.setState({
            seen1: false,
            seen2: false,
            seen3: false,
            seen4: true
        })
        console.log("works 4")
    }
    render() {
        return (
            <div >
                <Navbar loggedin="true" />
                <Menu accounts="accounts" />
                <aside className="w-[17%] float-left my-10 mx-3  fixed ">
                    <div className="overflow-y-auto py-5 px-3 rounded-md bg-slate-300  ">
                        <ul className="space-y-5 block ">
                            <li>
                                <button className="flex items-center bg-slate-50 p-2  font-normal text-black rounded-lg h-10 w-full hover:bg-white" onClick={this.togglepop1}>Add a customer</button>
                            </li>
                            <li>
                                <button className="flex items-center bg-slate-50   p-2 text-base font-normal text-black rounded-lg h-10 w-full hover:bg-white" onClick={this.togglepop2}>Add a sale</button>
                            </li>
                            <li>
                                <button className="flex items-center bg-slate-50   p-2 text-base font-normal text-black rounded-lg h-10 w-full hover:bg-white" onClick={this.togglepop3}>Remove a customer</button>
                            </li>
                            <li>
                                <button className="flex items-center bg-slate-50  p-2 text-base font-normal text-black rounded-lg h-10 w-full hover:bg-white" onClick={this.togglepop4}>Remove a sale</button>
                            </li>
                        </ul>
                    </div>
                </aside>
                {this.state.seen1 ? <div className=' w-[79%] mx-5 float-right my-10'> <CustForm /> </div> : null}
                {this.state.seen2 ? <div className='bg-slate-200 w-4/5 mx-5 float-right my-10'> <SaleForm /> </div> : null}
                {this.state.seen3 ? <div className='bg-slate-200 w-4/5 mx-5 float-right my-10'> <Deletecust /> </div> : null}
                {this.state.seen4 ? <div className='bg-slate-200 w-4/5 mx-5 float-right my-10'> <Deletesale /> </div> : null}
            </div>
        );
    }
}

export default Customer_Data;