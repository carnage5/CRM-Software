import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
const Home = () => {
    const nav=useNavigate();
    function checklogin(){
        alert("works")
        nav('login')
    }
    return (  
        <div className='bg-yellow-500'> 
            <Navbar/>
            <h1 >home</h1>
            <button onClick={checklogin}>login</button>
        </div>
    );
}
 
export default Home;
 
