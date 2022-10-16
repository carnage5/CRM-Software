import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div class=" bg-blue-400  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span class="ml-3 text-xl">CRM Software</span>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
            <NavLink to="/menu" class="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-base mt-4 md:mt-0 ">Menu</NavLink>
            <NavLink class="inline-flex items-center bg-orange-400 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-base mt-4 md:mt-0">test</NavLink>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Logout
            </button>
            </nav>
        </div>
     );
}
 
export default Navbar;