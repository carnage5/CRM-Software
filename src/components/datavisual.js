import React from 'react';
 class Datavisual extends React.Component {
    handleclick=()=>{
        this.props.toggle()
    };
    render() { 
        return (
            // <div class="z-10 bg-red-500 absolute m-auto flex items-centre w-3/4 h-3/4 ">
                <div class="bg-red-500 absolute rounded w-full h-5/6 my-2 border-solid border-4 border-black ">
                <button class="text-black float-right my-4 bg-slate-500 w-20 hover:text-cyan-400 cursor-pointer" onClick={this.handleclick}>&times;</button>
                <h1>data visualisation</h1>
                </div>
            // </div>
        );
    }
 }
  
 export default Datavisual;