import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const nav=useNavigate();
    function checklogin(){
        alert("works")
        nav('menu')
    }
    return (  
        <div>
            <h1>home</h1>
            <button onClick={checklogin}>login</button>
        </div>
    );
}
 
export default Home;
 
