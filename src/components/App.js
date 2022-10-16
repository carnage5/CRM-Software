import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './login';
import Home from './home';
import Menu from './menu';
import Data_visual from './datavisual';
import Customer_Data from './customerdata';
import Report from './generatereport';
import Queries from './queries';
import Refund from './refund';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='visual' element={<Data_visual/>}/>
        <Route path='data' element={<Customer_Data/>}/>
        <Route path='report' element={<Report/>}/>
        <Route path='queries' element={<Queries/>}/>
        <Route path='refund' element={<Refund/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
