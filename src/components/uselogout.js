import { Usercontexthook } from './Usercontexthook';
 
export const useLogout=()=>{
    const {dispatch} =Usercontexthook()//context hook for user state

    const logout=()=>{
        localStorage.removeItem('user')//remove user from local storage
        dispatch({type:'LOGOUT'})//logout action
    }
     return {logout}
}