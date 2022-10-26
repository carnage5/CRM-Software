import { useNavigate } from "react-router-dom";

const Notfound = () => {
    const nav=useNavigate();
    const gohome=()=>{
        nav('/')
    }
    return ( 
        <div>
            <h1> 404 page not found</h1>
            <button onClick={gohome} className= "border-solid border-2 border-black">back to home</button>
        </div>
     );
}
 
export default Notfound;