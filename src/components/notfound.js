import { useNavigate } from "react-router-dom";

const Notfound = () => {
    const nav=useNavigate();
    const gohome=()=>{
        nav('/')
    }
    return ( 
        <div >
        <section className="flex items-center h-full p-32">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-slate-700">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 text-xl  text-slate-300">But dont worry, you can find plenty of other things on our homepage.</p>
                <button  onClick={gohome} className="px-8 py-3 font-semibold dark:bg-slate-300 rounded-lg dark:text-gray-900 hover:bg-slate-200">Back to homepage</button>
            </div>
        </div>
    </section>
    </div>
     );
}
 
export default Notfound;