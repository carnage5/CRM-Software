import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
function Login() {
    const nav=useNavigate();
    function checkdetails(event){
        alert("succesful login")
        nav('/menu')
    }
    return ( 
        <div>
            <Navbar/>
       <div class=" mt-24 flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full py-10 pb-10 g-6 bg-slate-500">
        <div class=" mb-12 md:mb-0 p">
        <form onSubmit={checkdetails}>
        <div class=" mb-6 ">
            <input
              type="text"
              class="form-control block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>
          <div class="mb-6">
            <input
              type="password"
              class="form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
        <div class="text-center lg:text-left">
        <input type="submit" class="inline-block px-7 py-3 bg-orange-600 rounded hover: shadow-lg focus:bg-orange-400 text-white "/>
        </div>
        </form>
        </div>
        </div>
        </div>
     );
}

export default Login;
