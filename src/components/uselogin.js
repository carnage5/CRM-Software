import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usercontexthook } from './Usercontexthook';
//creates a login hook that can be called to set a login object
export const Uselogin=()=>{
    const {dispatch}=Usercontexthook() //context hook for user state
    const [error,setError]=useState(null) //error variable , pointless
    const nav=useNavigate()//navigate to next page
    //post login details to server and get a response
    const login=async (email,password)=>{
        const response=await fetch('http://localhost:4000/login',{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({email,password})
          })
          const json=await response.json()
          if(!response.ok)
          {   
            setError(json.error)
            alert(json.error)
          }
          if(response.ok)
          { localStorage.setItem('user',JSON.stringify(json)) //store user in local storage
            dispatch({type:"LOGIN",payload:json}) //action on login
            alert("logged in")
            nav('/home')
        }
    }
    return {login,error}
}