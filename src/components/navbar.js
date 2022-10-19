import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
    const nav =useNavigate();
    function gohome(){
        if(props.loggedin==="true")
            nav('/menu')
        else
            nav('/')
    }
    function login(){
        nav('/login')
    }
    function logout(){
        nav('/')
    }
    return ( 
        <div class=" bg-blue-400  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span class="ml-3 text-xl border-orange-400 border-2 border-solid " onClick={gohome}>CRM Software</span>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
            
            { props.loggedin==="hide" ?
                null :  
                props.loggedin==="true" ? 
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logout}>
                Logout
            </button>: <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={login}>
                Login
            </button>}
            </nav>
        </div>
     );
}
 
export default Navbar;