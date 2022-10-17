import React from 'react';
const Navbar = () => {
    return ( 
        <div class=" bg-blue-400  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span class="ml-3 text-xl border-orange-400 border-2 border-solid ">CRM Software</span>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Logout
            </button>
            </nav>
        </div>
     );
}
 
export default Navbar;