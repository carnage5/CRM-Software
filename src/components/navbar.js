import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from './uselogout';
import { Usercontexthook } from './Usercontexthook';
const Navbar = (props) => {
    const nav = useNavigate();
    const { logout } = useLogout()
    function gohome() {
        if (props.loggedin === "true")
            nav('/home')
        else
            nav('/')
    }
    function login() {
        nav('/login')
    }
    function Logout() {
        logout()
        nav('/')
    }
    return (
        <div className=" bg-slate-300  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span className="ml-3 text-2xl font-medium title-font text-slate-800 tracking-wider  " onClick={gohome}>CRM Software</span>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
                <span> {localStorage.user} </span>
                {props.loggedin === "hide" ?
                    null :
                    props.loggedin === "true" ?
                        <button className="inline-flex items-center bg-slate-600 text-slate-50 border-0 py-1 px-3 focus:outline-none  hover:bg-slate-500 rounded-lg text-base mt-3  md:mt-0" onClick={Logout}>
                            Logout
                        </button> : <button className="inline-flex items-center  bg-slate-600 text-slate-50 border-0 py-1 px-3 focus:outline-none  hover:bg-slate-500 rounded-lg text-base mt-4 md:mt-0" onClick={login}>
                            Login
                        </button>}
            </nav>
        </div>
    );
}

export default Navbar;