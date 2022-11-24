import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { Uselogin } from './uselogin';

function Login() {
    const nav=useNavigate();
    const {login,error}=Uselogin()
    const [user,setuser]=useState(
      {
        email:"",
        password:""
      }
    )
    useEffect(()=>{
      if(localStorage.user)
        nav('/home')
    })
    const checkdetails =async (event)=>{
        event.preventDefault();
        await login(user.email,user.password)
    }
    function changeval(event){
      var tempname=event.target.name
      var tempvalue=event.target.value
      setuser({
		...user,
        [tempname]:tempvalue
      })

    }
    return ( 
        <div>
            <Navbar loggedin="hide"/>
       <div className=" mt-40 flex justify-center items-center flex-wrap h-full py-10  bg-slate-500">
        <div className=" p-10 rounded-2xl bg-slate-200">
        <form onSubmit={checkdetails}>
        <div className=" mb-6  ">
            <input
              type="text"
              className="form-control block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-700 focus:outline-none"
              placeholder="Email address" onChange={changeval} name="email" value={user.email}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-700 focus:outline-none"
              placeholder="Password" onChange={changeval} name="password" value={user.password} 
            />
          </div>
        <div className="text-center lg:text-left">
        <input type="submit" className="inline-block px-7 py-3 bg-slate-700 text-white rounded-md hover: shadow-lg focus:bg-slate-500 "/>
        </div>
        </form>
        </div>
        </div>
        </div>
     );
}

export default Login;
