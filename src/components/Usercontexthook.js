import { useContext } from "react";
import { usercontext } from "./Usercontext";

//wrapper function for usercontext , to catch errors if not in a context object
export const Usercontexthook=()=>{
    const context=useContext(usercontext)
    if(!context)
    {
        throw Error('not within context object')
    }
    return context;
}