import React from 'react';
import Customerdata from './customerdata';
import Datavisual from './datavisual';
import Report from './generatereport';
import Navbar from './navbar';
class Menu extends React.Component {
    state={
        seen1:false,
        seen2:false,
        seen3:false
    }
    togglepop1=()=>{
        this.setState({
            seen1: !this.state.seen1
        })
        console.log("works 1")
    }
    togglepop2=()=>{
        this.setState({
            seen2: !this.state.seen2
        })
        console.log("works 2")
    }
    togglepop3=()=>{
        this.setState({
            seen3: !this.state.seen3
        })
        console.log("works 3")
    }
    render() { 
        return (
            <div>
                <Navbar/>
                <aside class="w-1/5 float-left my-10  ">
                    <div class="overflow-y-auto py-4 px-3 rounded bg-slate-600 ">
                        <ul class="space-y-5 block ">
                            <li>
                                <button class="flex text-xl items-center bg-slate-300 p-2  font-normal text-black rounded-lg h-20 w-full hover:bg-white" onClick={this.togglepop1}>Data visual</button>
                            </li>
                            <li>
                                <button class="flex items-center bg-slate-300 p-2 text-base font-normal text-black rounded-lg h-20 w-1/2 hover:bg-white" onClick={this.togglepop2}>Generate report</button>
                            </li>
                            <li>
                                <button class="flex items-center bg-slate-300 p-2 text-base font-normal text-black rounded-lg h-20 w-1/2 hover:bg-white" onClick={this.togglepop3}>Data</button>
                            </li>
                        </ul>
                    </div>
                </aside>
                <aside class="w-1/5 float-right my-10">
                    <div class="overflow-y-auto py-4 px-3 rounded bg-slate-100 space-y-2">
                        <p>Queries</p>
                        <p>Requests</p>
                    </div>
                </aside>
                <div>
                    {this.state.seen1 ? <Datavisual toggle={this.togglepop1} /> : null}
                </div>
                <div>
                    {this.state.seen2 ? <Report toggle={this.togglepop2}/> : null}
                </div>
                <div>
                    {this.state.seen3 ? <Customerdata toggle={this.togglepop3}/> : null}
                </div>
            </div>
        );
    }
}
 
export default Menu;