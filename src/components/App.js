import './App.css';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import Login from './login';
import Startpage from './home';
import Menu from './menu';
import Datavisual from './dashboard';
import CustomerData from './accounts';
import Report from './report';
import Queries from './queries';
import Refund from './refund';
import Notfound from './notfound';
import { Usercontexthook } from './Usercontexthook';
function App() {
  const {user}=Usercontexthook()
  // if(user)
  {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Startpage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='dashboard' element={<Datavisual/>}/>
        <Route path='accounts' element={<CustomerData/>}/>
        <Route path='reports' element={<Report/>}/>
        <Route path='queries' element={<Queries/>}/>
        <Route path='refund' element={<Refund/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
  }
//   else
//  { return (
//     <div className="App">
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='login' element={<Login/>}/>
//         <Route path='menu' element={<Login/>}/>
//         <Route path='visual' element={<Login/>}/>
//         <Route path='data' element={<Login/>}/>
//         <Route path='report' element={<Login/>}/>
//         <Route path='queries' element={<Login/>}/>
//         <Route path='refund' element={<Login/>}/>
//       </Routes>
//     </BrowserRouter>
//     </div>
//  );
//  }
}

export default App;
