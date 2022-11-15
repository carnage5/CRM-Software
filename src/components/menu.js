import React from 'react';
import {Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className=' container flex flex-wrap rounded-lg mx-5 mt-5 p-5 flex-col md:ml-auto md:mr-auto items-center bg-slate-100 w-1/2'>
                    <div className='md:ml-auto md:mr-auto flex flex-wrap text-base justify-center space-x-10'>
                        <Link className= {' text-center rounded ' + (this.props.landing ?  'border-b-4 border-slate-700':'')} to='/home'>Home</Link>
                        <Link className= {' text-center rounded ' + (this.props.accounts ?  'border-b-4 border-slate-700':'')} to='/accounts'>Accounts</Link>
                        <Link className= {' text-center rounded ' + (this.props.dashboard ?  'border-b-4 border-slate-700':'')} to='/dashboard'>Dashboard</Link>
                        <Link className= {' text-center rounded ' + (this.props.reports ?  'border-b-4 border-slate-700':'')} to='/reports'>Reports</Link>
                        <Link className= {' text-center rounded ' + (this.props.queries ?  'border-b-4 border-slate-700':'')} to='/queries'>Queries</Link>
                        <Link className= {' text-center rounded ' + (this.props.refunds ?  'border-b-4 border-slate-700':'')} to='/refunds'>Refunds</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;

/*
<aside className="w-1/5 float-left my-10  ">
                    <div className="overflow-y-auto py-4 px-3 rounded bg-slate-600 ">
                        <ul className="space-y-5 block ">
                            <li>
                                <button className="flex text-xl items-center bg-slate-300 p-2  font-normal text-black rounded-lg h-20 w-full hover:bg-white" onClick={this.togglepop1}>Data visual</button>
                            </li>
                            <li>
                                <button className="flex items-center bg-slate-300 p-2 text-base font-normal text-black rounded-lg h-20 w-1/2 hover:bg-white" onClick={this.togglepop2}>Generate report</button>
                            </li>
                            <li>
                                <button className="flex items-center bg-slate-300 p-2 text-base font-normal text-black rounded-lg h-20 w-1/2 hover:bg-white" onClick={this.togglepop3}>Data</button>
                            </li>
                        </ul>
                    </div>
                </aside>
                <aside className="w-1/5 float-right my-10">
                    <div className="overflow-y-auto py-4 px-3 rounded bg-slate-100 space-y-2">
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