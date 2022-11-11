import React from 'react';
import Customerdata from './accounts';
import Datavisual from './dashboard';
import Report from './report';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className=' container flex flex-wrap rounded-lg mx-5 mt-1 p-5 flex-col md:ml-auto md:mr-auto items-center bg-blue-300 w-1/2'>
                    <div className='md:ml-auto md:mr-auto flex flex-wrap text-base justify-center space-x-4'>
                        <Link className='bg-blue-200 w-20 text-center rounded' to='/home'>Home</Link>
                        <Link to='/accounts'>Accounts</Link>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/reports'>Reports</Link>
                        <Link to='/queries'>Queries</Link>
                        <Link to='/refunds'>Refunds</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;

/*
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
                    <Link to='/queries'>Queries</Link>
                    <p>&nbsp;</p>
                    <Link to='/refund'>Refunds</Link>
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
                */