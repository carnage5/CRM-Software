import { createContext, useReducer } from "react";

export const usercontext=createContext();

export const userreducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {user:action.payload} //set user object to result from action
        case 'LOGOUT':
            return{user:null} //clear user object
        default:
            return state
    }
}
export const UserContextProvider=({children})=>{
    const [state,dispatch]=useReducer(userreducer,{
        user:null //initialize user object
    })
    console.log("user state: ",state)

    return (
        <usercontext.Provider value={{...state,dispatch}}>
            {children} 
        </usercontext.Provider>
    )
}