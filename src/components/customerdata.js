import React from 'react';
class Customer_Data extends React.Component {
    handleclick=()=>{
        this.props.toggle()
    };
    render() { 
        return (
            <div class="bg-pink-50 absolute rounded w-full h-5/6 my-2 border-solid border-2 border-black ">
                <button class="text-black float-right my-4 bg-slate-500 w-20 hover:text-cyan-400 cursor-pointer" onClick={this.handleclick}>&times;</button>
                <h1>customer data</h1>
                </div>
        );
    }
}
 
export default Customer_Data;